# Generated by Django 2.2.18 on 2021-04-04 20:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_auto_20210404_2023'),
    ]

    operations = [
        migrations.AlterField(
            model_name='member',
            name='organization',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='account.Organization'),
        ),
    ]
