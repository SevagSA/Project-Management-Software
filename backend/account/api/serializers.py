from rest_framework import serializers

from account.models import Administrator, Member, Organization, Staff


class OrganizationSerializer(serializers.ModelSerializer):
    # redefined here to avoid unique constraint error on get_or_create
    organization_name = serializers.CharField(max_length=50)

    class Meta:
        model = Organization
        fields = ["id", "organization_name"]


class MemberSerializer(serializers.ModelSerializer):
    organization = OrganizationSerializer()

    class Meta:
        model = Member
        fields = ["id", "email", "first_name",
                  "last_name", "phone_number", "organization"]


class AdministratorSerializer(serializers.ModelSerializer):
    """
    Serializer for the Administrator Model. This class also
    acts as a base class for the StaffRegistrationSerializer to keep code
    DRY.
    """
    member = MemberSerializer()
    password = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = Administrator
        fields = ["id", "member", "password", "password2"]

    def validate_password2(self, value):
        if value != self.initial_data["password"]:
            raise serializers.ValidationError("Passwords must match.")
        return value

    def define_member_class_attrbutes(self):
        """
        Returns a member class with its appropriate class attributes.
        This method is used for keeping code DRY with StaffRegistrationSerializer.
        """
        org, created = Organization.objects.get_or_create(
            organization_name=self.validated_data["member"]["organization"]["organization_name"])
        member = Member(
            email=self.validated_data["member"]["email"],
            first_name=self.validated_data["member"]["first_name"],
            last_name=self.validated_data["member"]["last_name"],
            phone_number=self.validated_data["member"]["phone_number"],
            organization=org,
        )
        member.set_password(self.validated_data["password"])
        return member

    def save(self):
        member = self.define_member_class_attrbutes()
        member.is_organization_admin = True
        member.save()
        administrator = Administrator.objects.create(member=member)
        return administrator


class StaffRegistrationSerializer(AdministratorSerializer):
    class Meta:
        model = Staff
        fields = AdministratorSerializer.Meta.fields + ["role"]

    def save(self):
        member = self.define_member_class_attrbutes()
        member.is_organization_staff = True
        member.save()
        staff = Staff.objects.create(
            member=member, role=self.validated_data["role"])
        return staff


class StaffSerializer(serializers.ModelSerializer):
    member = MemberSerializer()

    class Meta:
        model = Staff
        fields = ["id", "role", "member"]


class StaffSerializerForProjectSelect(serializers.ModelSerializer):
    """
    Serializer used to select a staff to assign a project to.
    
    A new serializer is created because there's no need for the
    `member` field/serializer nor the validation that the
    StaffRegistrationSerializer includes.
    """
    email = serializers.EmailField()
    project_count = serializers.IntegerField()

    class Meta:
        model = Staff
        fields = ["id", "role", "email", "project_count"]
