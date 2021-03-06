from django.db import models
from django.conf import settings
from django.db.models.fields import DateField
from django.core.exceptions import ValidationError
from django.contrib.contenttypes.fields import GenericRelation

from account.models import Staff
from notification.models import Notification


class Activity(models.Model):
    staff_members = models.ManyToManyField(
        Staff, related_name="%(app_label)s_%(class)s_related")
    name = models.CharField(max_length=40, unique=True)
    # Django 3.0+ : TextChoices
    status = models.CharField(
        max_length=11, choices=settings.ACTIVITY_STATUS, default=settings.TODO)
    description = models.CharField(max_length=250)
    start_date = DateField()
    end_date = DateField(null=True, blank=True)
    deadline = models.DateField()
    labels = models.ManyToManyField("Label", blank=True)
    notes = models.TextField(null=True, blank=True)
    is_task = models.BooleanField(default=False)

    class Meta:
        abstract = True

    def __str__(self):
        return self.name

    def clean(self):
        """
        To enforce data validation from places other
        than serializers like the admin dashboard.
        """
        if self.end_date and self.end_date < self.start_date:
            raise ValidationError(
                "End date must be either the same day or a later \
                    date than the project start date")

        if self.deadline < self.start_date:
            raise ValidationError(
                "Deadline must be either the same day or a later \
                    date than the project start date")


class Project(Activity):
    project_manager = models.ForeignKey(
        Staff, on_delete=models.CASCADE, related_name="projects_as_pm")
    notification = GenericRelation(Notification)

    def clean(self):
        """
        To enforce data validation from places other
        than serializers like the admin dashboard.
        """
        if not self.project_manager.role == settings.PM:
            raise ValidationError(
                "Only staff with a role of Project Manager can be assigned \
                    as project manager of a project.")


class Task(Activity):
    project = models.ForeignKey(
        Project, on_delete=models.CASCADE, related_name="tasks")
    notification = GenericRelation(Notification)


class Label(models.Model):
    name = models.CharField(max_length=40)
    # e.g.: eb4034 will be stored w/o the '#'
    color = models.CharField(max_length=6)
