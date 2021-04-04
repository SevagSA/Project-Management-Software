from django.db import models

# Create your models here.
from django.db import models
from django.conf import settings
from django.contrib.contenttypes.fields import GenericRelation


class ChatRoom(models.Model):
    room_name = models.CharField(max_length=50, unique=True)
    members = models.ManyToManyField(
        settings.AUTH_USER_MODEL, blank=True, related_name="members")
    connected_members = models.ManyToManyField(
        settings.AUTH_USER_MODEL, blank=True, related_name="connected_members")
    # notification = GenericRelation(Notification)
    newest_message = models.OneToOneField(
        "Message", on_delete=models.CASCADE, blank=True, null=True)
    has_unread_msg = models.BooleanField(default=False)


class Message(models.Model):
    sender = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    chat_room = models.ForeignKey(ChatRoom, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)
    message = models.CharField(max_length=400)
    message_media = models.ImageField(upload_to="message_media")
