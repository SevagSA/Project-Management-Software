# Generated by Django 2.2.18 on 2021-04-05 09:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('activity', '0002_auto_20210405_0949'),
    ]

    operations = [
        migrations.RenameField(
            model_name='label',
            old_name='label_name',
            new_name='name',
        ),
    ]