# Generated by Django 2.2.18 on 2021-04-11 16:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('activity', '0003_auto_20210405_0949'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='notes',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='task',
            name='notes',
            field=models.TextField(blank=True, null=True),
        ),
    ]