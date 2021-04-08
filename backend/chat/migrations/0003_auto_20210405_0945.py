# Generated by Django 2.2.18 on 2021-04-05 09:45

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0002_auto_20210404_2021'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chatroom',
            name='members',
            field=models.ManyToManyField(related_name='chat_room_members', to=settings.AUTH_USER_MODEL),
        ),
    ]