from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser


class MemberManager(BaseUserManager):
    def create_user(self, email, username, password=None):
        """
        Creates and saves a Member with the given email and
        password
        """
        if not email:
            raise ValueError("Members must have an email address")

        if not username:
            raise ValueError("Members must have a username")

        member = self.model(
            email=self.normalize_email(email),
            username=username
        )

        member.set_password(password)
        member.save(using=self._db)
        return member

    def create_superuser(self, email, username, password=None):
        """
        Creates and saves a superuser with the given email
        and password.
        """
        member = self.create_user(
            self.normalize_email(email),
            username=username,
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
    username = models.CharField(
        max_length=128, null=False,
        blank=False, unique=True
    )
    first_name = models.CharField(
        verbose_name="First Name",
        max_length=50
    )
    last_name = models.CharField(
        verbose_name="Last Name",
        max_length=50
    )

    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = MemberManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    class Meta:
        verbose_name = "Member"
        verbose_name_plural = "Members"
