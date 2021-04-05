from django.db import models
from django.conf import settings
from django.db.models.fields import DateField
from django.contrib.contenttypes.fields import GenericRelation

from account.models import Staff
from notification.models import Notification


class Activity(models.Model):
    # staff_members will not include the PM
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
    notes = models.TextField()

    class Meta:
        abstract = True


class Project(Activity):
    project_manager = models.OneToOneField(
        Staff, on_delete=models.CASCADE, related_name="project")
    notification = GenericRelation(Notification)


class Task(Activity):
    project = models.ForeignKey(
        Project, on_delete=models.CASCADE, related_name="tasks")
    notification = GenericRelation(Notification)


class Label(models.Model):
    name = models.CharField(max_length=40)
    # e.g.: eb4034 will be stored w/o the '#'
    color = models.CharField(max_length=6)
