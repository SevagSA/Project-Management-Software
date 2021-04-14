from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
from django.conf import settings

from rest_framework import status
from rest_framework.response import Response


class MemberManager(BaseUserManager):
    def create_user(self, email, password=None):
        """
        Creates and saves a Member with the given email and
        password
        """
        if not email:
            raise ValueError("Members must have an email address")

        member = self.model(
            email=self.normalize_email(email),
        )

        member.set_password(password)
        member.save(using=self._db)
        return member

    def create_superuser(self, email, password=None):
        """
        Creates and saves a superuser with the given email
        and password.
        """
        member = self.create_user(
            self.normalize_email(email),
            password=password
        )
        member.is_admin = True
        member.is_staff = True
        member.is_superuser = True
        member.save(using=self._db)
        return member


class Member(AbstractBaseUser):
    email = models.EmailField(
        verbose_name="email address",
        max_length=100,
        unique=True
    )
    first_name = models.CharField(
        verbose_name="First Name",
        max_length=50
    )
    last_name = models.CharField(
        verbose_name="Last Name",
        max_length=50
    )
    # TODO make this more robust
    phone_number = models.CharField(max_length=15)
    organization = models.ForeignKey(
        "Organization", on_delete=models.CASCADE, null=True, blank=False)
    is_organization_admin = models.BooleanField(default=False)
    is_organization_staff = models.BooleanField(default=False)

    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = MemberManager()

    USERNAME_FIELD = "email"

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    class Meta:
        verbose_name = "Member"
        verbose_name_plural = "Members"

    def is_current_organization_admin(self, admin):
        """
        Return true if `admin` is_organization_admin of the
        current user's organization.
        """
        return admin.is_organization_admin and admin.organization == self.organization

    @staticmethod
    def register_member(request, serializerClass):
        serializer = serializerClass(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class Organization(models.Model):
    organization_name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.organization_name


class Administrator(models.Model):
    """
    This class is created to prevent tedious db record
    changes in the future, if this class were to have
    different fields than its parent.
    """
    member = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return self.member.email


class Staff(models.Model):
    member = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    # Django 3.0+ : TextChoices
    role = models.CharField(
        max_length=20, choices=settings.STAFF_ROLES, default=settings.STAFF_MEMBER)

    def __str__(self):
        return self.member.email
