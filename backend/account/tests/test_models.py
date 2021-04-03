from django.test import TestCase
from django.db import IntegrityError
from django.contrib.auth.hashers import check_password

from account.models import User

class TestUserModel(TestCase):

    def setUp(self):
        self.user1 = User.objects.create(
            email="joe@doe.com", username="joeDoe123",
            first_name="joe", last_name="doe")

    def test_model_create(self):
        self.assertEqual(self.user1.email, "joe@doe.com",
            "User obj should be created")

    def test_email_uniqueness(self):
        with self.assertRaises(IntegrityError):
            User.objects.create(
                email="joe@doe.com", username="joeDoe1",
                first_name="joe", last_name="doe")

    def test_username_uniqueness(self):
        with self.assertRaises(IntegrityError):
            User.objects.create(
                email="joe1@doe1.com", username="joeDoe123",
                first_name="joe", last_name="doe")

    def test_create_superuser(self):
        super_user = User.objects.create_superuser(
            "super@user", "superUsername", "pass123")
        self.assertEqual(super_user.is_admin, True,
            "is_admin should be true")
        self.assertEqual(super_user.is_superuser, True,
            "is_superuser should be true")
        self.assertEqual(super_user.is_staff, True,
            "is_staff should be true")

    def test_create_user(self):
        user = User.objects.create_user(
            "user@user", "userUsername", "pass123")
        self.assertEqual(user.email, "user@user",
            "email should be user@user")
        self.assertEqual(user.username, "userUsername",
            "username should be userUsername")
        self.assertEqual(check_password("pass123", user.password), True,
            "check_password with pass123 should return True")

    def test_create_user_without_email(self):
        with self.assertRaises(ValueError):
            user = User.objects.create_user(
                None, "userUsername", "pass123")
