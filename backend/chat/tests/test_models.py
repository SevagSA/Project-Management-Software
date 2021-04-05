from datetime import datetime
from django.test import TestCase
from django.db import IntegrityError

from chat.models import ChatRoom, Message
from account.models import Member, Organization


class TestUserModel(TestCase):

    def setUp(self):

        organization = Organization.objects.create(
            organization_name="Org 2")

        self.sender = Member.objects.create(
            email="sender@sender.com", username="sender123",
            first_name="sender", last_name="doe",
            organization=organization,
            phone_number="7654334567")

        receiver = Member.objects.create(
            email="receiver@receiver.com", username="receiver123",
            first_name="receiver", last_name="doe",
            organization=organization,
            phone_number="308685087")

        self.room = ChatRoom.objects.create(room_name="chat room 1")
        self.room.members.add(self.sender)
        self.room.members.add(receiver)

        self.newest_message = Message.objects.create(
            sender=self.sender,
            chat_room=self.room,
            timestamp=datetime.now(),
            message="Hello, this is the msg"
        )
        self.room.newest_message = self.newest_message

    # ChatRoom model tests

    def test_chat_room_model_create(self):
        self.assertEqual(self.room.room_name, "chat room 1",
                         "ChatRoom obj should be created")

    def test_chat_room_name_uniqueness(self):
        with self.assertRaises(IntegrityError):
            ChatRoom.objects.create(room_name="chat room 1")

    # Message model tests

    def test_message_model_create(self):
        self.assertEqual(self.newest_message.sender, self.sender,
                         f"Message obj's sender should be {self.sender}")
        self.assertEqual(self.newest_message.chat_room, self.room,
                         f"Message obj's chat_room should be {self.room}")
        self.assertEqual(self.newest_message.message, "Hello, this is the msg",
                         "Message obj's sender should be \"Hello, this is the msg\"")
