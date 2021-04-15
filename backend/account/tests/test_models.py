from django.test import TestCase
from django.db import IntegrityError
from django.contrib.auth.hashers import check_password

from account.models import Member, Organization, Staff, Administrator


class TestUserModels(TestCase):

    def setUp(self):
        self.organization = Organization.objects.create(
            organization_name="Org 1")

        self.member = Member.objects.create(
            email="joe@doe.com", first_name="joe", last_name="doe",
            organization=self.organization,
            phone_number="123123123123")

        self.staff = Staff.objects.create(member=self.member)

        self.admin_member = Member.objects.create(
            email="admin@admin.com", first_name="adminFname", last_name="adminLname",
            organization=self.organization,
            phone_number="123123123123")

        self.admin = Administrator.objects.create(member=self.admin_member)

    # Member model tests

    def test_member_model_create(self):
        self.assertEqual(self.member.email, "joe@doe.com",
                         "Member obj should be created")

    def test_member_email_uniqueness(self):
        with self.assertRaises(IntegrityError):
            Member.objects.create(
                email="joe@doe.com", first_name="joe", last_name="doe",
                organization=self.organization,
                phone_number="123123123123")

    def test_create_superuser(self):
        super_user = Member.objects.create_superuser(
            "super@user", "pass123")
        self.assertEqual(super_user.is_admin, True,
                         "is_admin should be true")
        self.assertEqual(super_user.is_superuser, True,
                         "is_superuser should be true")
        self.assertEqual(super_user.is_staff, True,
                         "is_staff should be true")

    def test_create_user(self):
        user = Member.objects.create_user(
            "user@user", "pass123")
        self.assertEqual(user.email, "user@user",
                         "email should be user@user")
        self.assertEqual(check_password("pass123", user.password), True,
                         "check_password with pass123 should return True")

    def test_create_user_without_email(self):
        with self.assertRaises(ValueError):
            Member.objects.create_user(
                None, "pass123")

    # Organization model tests

    def test_organization_model_create(self):
        self.assertEqual(self.organization.organization_name, "Org 1",
                         "Organization obj should be created")

    def test_organization_name_uniqueness(self):
        with self.assertRaises(IntegrityError):
            Organization.objects.create(organization_name="Org 1")

    # Staff model tests

    def test_staff_model_create(self):
        self.assertEqual(self.staff.member.email, "joe@doe.com",
                         "Staff obj should be created")

    def test_staff_name_uniqueness(self):
        with self.assertRaises(IntegrityError):
            # A member should only have 1 staff account
            Staff.objects.create(member=self.member)

    # Administrator model tests

    def test_administrator_model_create(self):
        self.assertEqual(self.staff.member.email, "joe@doe.com",
                         "Staff obj should be created")

    def test_administrator_name_uniqueness(self):
        with self.assertRaises(IntegrityError):
            # A member should only have 1 administrator account
            Administrator.objects.create(member=self.admin_member)
