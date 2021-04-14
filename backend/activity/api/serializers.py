import datetime

from rest_framework import serializers
from django.conf import settings

from activity.models import Project, Task

from account.models import Staff


class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    project_manager = serializers.HyperlinkedRelatedField(
        required=False, queryset=Staff.objects.all(), view_name="account:staff-detail")
    notification = serializers.HyperlinkedIdentityField(
        view_name="notification-detail")
    staff_members = serializers.HyperlinkedRelatedField(
        allow_empty=False, many=True, queryset=Staff.objects.all(),
        view_name="account:staff-detail")

    class Meta:
        model = Project
        fields = [
            "url", "project_manager", "notification", "staff_members",
            "name", "status", "description", "start_date", "end_date",
            "deadline", "labels", "notes"
        ]

    def validate_end_date(self, value):
        start_date = datetime.datetime.strptime(
            self.initial_data["start_date"], "%Y-%m-%d").date()
        if value < start_date:
            raise serializers.ValidationError(
                "End date must be either the same day or a later \
                    date than the project start date")
        return value

    def validate_deadline(self, value):
        start_date = datetime.datetime.strptime(
            self.initial_data["start_date"], "%Y-%m-%d").date()
        if value < start_date:
            raise serializers.ValidationError(
                "Deadline must be either the same day or a later \
                    date than the project start date")
        return value

    def validate_project_manager(self, value):
        if not value.role == settings.PM:
            raise serializers.ValidationError(
                "Only staff with a role of Project Manager can be assigned \
                    as project manager of a project.")
        return value


class TaskSerializer(serializers.HyperlinkedModelSerializer):
    project = serializers.HyperlinkedIdentityField(view_name="project-detail")

    class Meta:
        model = Task
        fields = ["url", "project", "notification"]
