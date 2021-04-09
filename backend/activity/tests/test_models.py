from datetime import datetime
from django.test import TestCase
from django.db import IntegrityError
from django.conf import settings

from account.models import Member, Staff, Organization
from activity.models import Project, Task, Label


class TestActivityModel(TestCase):

    def setUp(self):
        organization = Organization.objects.create(
            organization_name="best org")

        pm = Member.objects.create(
            email="pm@pm.com", first_name="pmFirst", last_name="pmLast",
            organization=organization,
            phone_number="957683968")

        staff_member = Member.objects.create(
            email="staff@staff.com", first_name="staffFirst", last_name="staffLast",
            organization=organization,
            phone_number="86754768934")

        pm = Staff.objects.create(member=pm)
        self.project = Project.objects.create(
            project_manager=pm,
            name="UI Prototyping",
            description="Finish the prototyping on Figma",
            status=settings.TODO,
            start_date=datetime(2021, 2, 1),
            deadline=datetime(2021, 5, 2),
            notes="This project should be easy enough for the team. \
                We've done something similar before.",
        )
        staff = Staff.objects.create(member=staff_member)
        self.project.staff_members.add(staff)
        label = Label.objects.create(name="High Priority", color="f55347")
        self.project.labels.add(label)

        self.task = Task.objects.create(
            project=self.project,
            name="Home Screen Prototyping",
            description="Finish the prototyping on Figma",
            status=settings.IN_PROGRESS,
            start_date=datetime(2021, 2, 10),
            deadline=datetime(2021, 2, 20),
            notes="We have some inspriation designs compiled from \
                dribble in our google drive folder. Make sure to check it out.",
        )
        self.task.staff_members.add(staff)
        label = Label.objects.create(name="Check Google Drive", color="d9ed24")
        self.task.labels.add(label)

    # Project model tests

    def test_project_model_create(self):
        self.assertEqual(self.project.name, "UI Prototyping",
                         "Project obj should be created")

    def test_project_name_uniqueness(self):
        with self.assertRaises(IntegrityError):
            Project.objects.create(name="UI Prototyping")

    def test_project_start_date_before_deadline(self):
        self.assertEqual(self.project.start_date < self.project.deadline, True,
                         "project.start_date should be < project.deadline")

    # Task model tests

    def test_task_model_create(self):
        self.assertEqual(self.task.name, "Home Screen Prototyping",
                         "Task obj should be created")

    def test_task_name_uniqueness(self):
        with self.assertRaises(IntegrityError):
            Task.objects.create(name="Home Screen Prototyping")

    def test_task_start_date_before_deadline(self):
        self.assertEqual(self.task.start_date < self.task.deadline, True,
                         "task.start_date should be < task.`deadline`")
