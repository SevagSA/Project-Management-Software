from datetime import datetime
from django.test import TestCase
from django.conf import settings

from notification.models import Notification
from account.models import Member, Staff, Organization
from activity.models import Project


class TestNotificationModel(TestCase):

    def setUp(self):
        organization = Organization.objects.create(
            organization_name="notification org")

        to_member = Member.objects.create(
            email="to@to.com", first_name="toFirst", last_name="toLast",
            organization=organization,
            phone_number="2256457869")

        from_member = Member.objects.create(
            email="from@from.com", first_name="fromFirst", last_name="fromLast",
            organization=organization,
            phone_number="0938745934")

        pm = Staff.objects.create(member=from_member)
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

        self.project.notification.create(
            to_member=to_member,
            from_member=from_member,
            # urls have not been setup yet. Use / for now.
            # This should link to the project detail page.
            action_url="/",
            description=f"Project Created: {self.project.name}",
        )

    def test_project_notification_create(self):
        self.assertEqual(
            Notification.objects.first().to_member.email, "to@to.com",
            "Project's notification's to_member should be to@to.com")
        self.assertEqual(
            Notification.objects.first().from_member.email, "from@from.com",
            "Project's notification's from_member should be from@from.com")
