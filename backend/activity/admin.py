from django.contrib import admin
from .models import Project, Task, Label

admin.site.register([Project, Task, Label])
