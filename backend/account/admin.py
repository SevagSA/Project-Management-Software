from django.contrib import admin
from account.models import Member, Organization, Staff, Administrator


admin.site.register([Member, Organization, Staff, Administrator])
