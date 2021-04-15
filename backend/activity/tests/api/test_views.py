from django.urls import reverse
from django.conf import settings

from rest_framework import status
from rest_framework.test import APITestCase, APIClient
from activity.models import Project
from account.models import Staff


class TestsActivityViews(APITestCase):

    @classmethod
    def setUpClass(cls):
        # Creating a new staff member
        # TODO will be changed to reverse once
        # account views are changed to viewsets
        cls.staff_url = "/api/account/register-staff/"
        staff_data = {
            "member": {
                "email": "ani@orgname.com",
                "first_name": "Ani",
                "last_name": "Melkonian",
                "phone_number": "4383456487",
                "organization": {
                    "organization_name": "An organization"
                }
            },
            "password": "456",
            "password2": "456",
            "role": settings.BACKEND_DEVELOPER
        }

        # Creating a project manager
        # TODO will be changed to reverse once
        # account views are changed to viewsets
        project_manager_url = "/api/account/register-staff/"
        cls.project_manager_data = {
            "member": {
                "email": "alex@orgname.com",
                "first_name": "Alex",
                "last_name": "Jones",
                "phone_number": "5146558467",
                "organization": {
                    "organization_name": "An organization"
                }
            },
            "password": "123",
            "password2": "123",
            "role": settings.PM
        }

        # This client will hold a bearer token, hence "_auth"
        cls.client_auth = APIClient()
        cls.project_manager = cls.client_auth.post(
            project_manager_url, cls.project_manager_data).data
        cls.staff_member = cls.client_auth.post(cls.staff_url, staff_data).data

        # Getting the project_manager's token
        cls.token_url = reverse("account:token_obtain_pair")
        token_data = {
            "email": cls.project_manager["member"]["email"],
            "password": "123",
        }
        cls.access_token = cls.client_auth.post(
            cls.token_url, token_data).data["access"]
        cls.client_auth.credentials(
            HTTP_AUTHORIZATION="Bearer " + cls.access_token)

        # A sample project data
        cls.project = {
            "staff_members": [
                "http://127.0.0.1:8000/api/account/staff/2/"
            ],
            "name": "UML Design",
            "description": "Build UML diagrams (Class, Use Case and Activity Diagrams).\
                See Google Drive for information on the requirements.",
            "start_date": "2021-04-17",
            "deadline": "2021-05-17",
            "notes": "We need to decide if we will use Lucidchart or draw.io"
        }

        # Defining URLs for reuse throughout the class.
        cls.project_list_url = reverse("project-list")

        super(TestsActivityViews, cls).setUpClass()

    def test_create_project(self):
        """
        Ensure we can create a new project given
        the correct information and permissions.
        """
        response = self.client_auth.post(self.project_list_url, self.project)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED,
                         "status_code should be status.HTTP_201_CREATED")
        self.assertEqual(Project.objects.count(), 1,
                         "Project.objects.count() should be 1")
        self.assertEqual(Project.objects.get().name, "UML Design",
                         "Project.objects.get().name should be \"UML Design\" ")

    # Testing has_permission

    def test_project_list(self):
        """
        Ensure that any authenticated member
        can access the project list api.
        """
        # Populating the test DB w/1 project
        response = self.client_auth.post(self.project_list_url, self.project)
        response = self.client_auth.get(self.project_list_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK,
                         "status_code should be status.HTTP_200_OK")
        self.assertEqual(
            response.data["count"], 1, "response.data[\"count\"] should be 1: there should be 1 project")
        self.assertEqual(
            response.data["next"], None, "response.data[\"next\"] should be None: there should be 1 page")
        self.assertEqual(
            response.data["previous"], None, "response.data[\"previous\"] should be None: there should be 1 page")
        self.assertEqual(
            response.data["results"][0]["name"], Project.objects.first().name)

    def test_project_detail(self):
        """
        Ensure that any authenticated member
        can access the project detail api.
        """
        response = self.client_auth.post(self.project_list_url, self.project)
        first_project = Project.objects.first()
        url = reverse("project-detail",
                      kwargs={"pk": first_project.pk})
        response = self.client_auth.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK,
                         "status_code should be status.HTTP_200_OK")
        self.assertEqual(response.data["name"], first_project.name,
                         "response.data[\"name\"] should be first_project.name")

    def test_is_authenticated(self):
        """
        Ensure that a non authenticated member
        cannot access the activity api.
        """
        response = self.client.post(self.project_list_url, self.project)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED,
                         "status_code should be status.HTTP_401_UNAUTHORIZED")

        response = self.client.get(self.project_list_url, self.project)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED,
                         "status_code should be status.HTTP_401_UNAUTHORIZED")

        response = self.client_auth.post(self.project_list_url, self.project)

        project_detail_url = reverse("project-detail",
                                     kwargs={"pk": Project.objects.first().pk})
        response = self.client.get(project_detail_url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED,
                         "status_code should be status.HTTP_401_UNAUTHORIZED")

    # Test has_object_permission

    def test_project_other_organization_member_access(self):
        """
        Ensure that a member cannot access
        the activity api of an organizaiton
        that they are not part of.
        """
        # create a member from another org than "An organization"
        new_org_member = self.project_manager_data
        new_org_member["member"]["email"] = "neworg@email.com"
        new_org_member["member"]["organization"]["organization_name"] = "neworg"
        new_org_member = self.client_auth.post(
            self.staff_url, new_org_member).data

        # Get the obj of the new user
        new_org_member = Staff.objects.get(
            member__email=new_org_member["member"]["email"])

        # Authenticate as new_org_member
        token_data = {
            "email": new_org_member.member.email,
            "password": "123",
        }
        access_token = self.client.post(
            self.token_url, token_data).data["access"]
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + access_token)

        # ensure the organzations are different
        self.assertNotEqual(new_org_member.member.organization.organization_name,
                            self.project_manager["member"]["organization"]["organization_name"],
                            "new_org_member should have a different organization than self.project_manager")

        # crate a project with client_auth (w/self.project_manager's tokens)
        self.client_auth.post(self.project_list_url, self.project)

        # ensure api read access is not allowed
        project_detail_url = reverse("project-detail",
                                     kwargs={"pk": Project.objects.first().pk})
        response = self.client.get(project_detail_url)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN,
                         "status_code should be status.HTTP_403_FORBIDDEN")

        # ensure api write access is not allowed
        response = self.client.put(project_detail_url, self.project)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN,
                         "status_code should be status.HTTP_403_FORBIDDEN")
