# Generated by Django 2.2.18 on 2021-04-08 19:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0003_auto_20210404_2023'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='member',
            name='username',
        ),
    ]
