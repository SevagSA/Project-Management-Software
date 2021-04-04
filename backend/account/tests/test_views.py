from django.test import TestCase
from django.shortcuts import reverse
from django.contrib.auth import logout
from django.contrib.auth.hashers import make_password


from account.models import Member


class TestUserModel(TestCase):

    @classmethod
    def setUpClass(cls):
        cls.user = Member.objects.create(
            email="joe@doe.com", username="joeDoe123",
            first_name="joe", last_name="doe", password=make_password("pass123"))
        super(TestUserModel, cls).setUpClass()

    def test_register_view(self):
        # GET
        response = self.client.get(reverse("account:register"))
        self.assertEqual(response.status_code, 200,
                         "status code should be 200")
        # POST
        self.client.post(reverse("account:register"),
                         {
            "email": "hello@world.com",
            "username": "joeUsername",
            "first_name": "joe",
            "last_name": "doe",
            "password1": "a not commonly used password",
            "password2": "a not commonly used password",
        }
        )
        self.assertEqual(Member.objects.last().email,
                         "hello@world.com", "email shoud be hello@world.com")

    def test_login_view(self):
        # GET
        response = self.client.get(reverse("account:login"))
        self.assertEqual(response.status_code, 200,
                         "status code should be 200")
        # POST
        response = self.client.post(reverse("account:login"), {
                                    "email": self.user.email, "password": "pass123"})
        self.assertEqual(
            response.context["user"].is_authenticated, True, "user.is_authenticated should be True")

    def test_update_user(self):
        # Need to login to access update view
        response = self.client.post(reverse("account:login"), {
                                    "email": self.user.email, "password": "pass123"})
        updated_email = f"{self.user.email}NEW"
        updated_username = f"{self.user.username}NEW"
        updated_first_name = f"{self.user.first_name}NEW"
        updated_last_name = f"{self.user.last_name}NEW"

        self.client.post(reverse("account:update"), {
            "email": updated_email,
            "username": updated_username,
            "first_name": updated_first_name,
            "last_name": updated_last_name,
        })
        user = Member.objects.first()
        self.assertEqual(user.email, updated_email,
                         f"email should be: {updated_email}")
        self.assertEqual(user.username, updated_username,
                         f"username should be: {updated_username}")
        self.assertEqual(user.first_name, updated_first_name,
                         f"email should be: {updated_first_name}")
        self.assertEqual(user.last_name, updated_last_name,
                         f"email should be: {updated_last_name}")

    def test_logout(self):
        # Need to login before loggin out
        response = self.client.post(reverse("account:login"), {
                                    "email": self.user.email, "password": "pass123"})
        # Session will not be empty after logging in
        self.assertEqual(bool(list(self.client.session.items())),
                         True, "session should not be empty, and thus return True")

        response = self.client.post(reverse("account:logout"))
        # Session will be empty after logging out
        self.assertEqual(bool(list(self.client.session.items())),
                         False, "session should be empty, and thus return False")
