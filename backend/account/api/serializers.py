from rest_framework import serializers

from account.models import Administrator, Member, Organization, Staff


class OrganizationSerializer(serializers.ModelSerializer):
    # redefined here to avoid unique constraint error on get_or_create
    organization_name = serializers.CharField(max_length=50)

    class Meta:
        model = Organization
        fields = ["organization_name"]


class MemberSerializer(serializers.ModelSerializer):
    organization = OrganizationSerializer()

    class Meta:
        model = Member
        fields = ["email", "username", "first_name",
                  "last_name", "phone_number", "organization"]


class AdministratorSerializer(serializers.ModelSerializer):
    """
    Serializer for the Administrator Model. This class also
    acts as a base class for the StaffSerializer to keep code
    DRY.
    """
    member = MemberSerializer()
    password = serializers.CharField(
        style={"input_type": "password"}, write_only=True)
    password2 = serializers.CharField(
        style={"input_type": "password"}, write_only=True)

    class Meta:
        model = Administrator
        fields = ["member", "password", "password2"]

    def validate_password2(self, value):
        if value != self.initial_data["password"]:
            raise serializers.ValidationError("Passwords must match.")
        return value

    def defineMemberClassAttrbutes(self):
        """
        Returns a member class with its appropriate class attributes.
        This method is used for keeping code DRY with StaffSerializer.
        """
        org, created = Organization.objects.get_or_create(
            organization_name=self.validated_data["member"]["organization"]["organization_name"])
        member = Member(
            email=self.validated_data["member"]["email"],
            username=self.validated_data["member"]["username"],
            first_name=self.validated_data["member"]["first_name"],
            last_name=self.validated_data["member"]["last_name"],
            phone_number=self.validated_data["member"]["phone_number"],
            organization=org,
        )
        member.set_password(self.validated_data["password"])
        return member

    def save(self):
        member = self.defineMemberClassAttrbutes()
        member.is_organization_admin = True
        member.save()
        administrator = Administrator.objects.create(member=member)
        return administrator


class StaffSerializer(AdministratorSerializer):
    class Meta:
        model = Staff
        fields = AdministratorSerializer.Meta.fields

    def save(self):
        member = self.defineMemberClassAttrbutes()
        member.is_organization_staff = True
        member.save()
        staff = Staff.objects.create(member=member)
        return staff
