from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializers import AdministratorSerializer, StaffSerializer

from account.models import Member


@api_view(["POST", ])
def register_administrator(request):
    return Member.register_member(request, AdministratorSerializer)


@api_view(["POST", ])
def register_staff(request):
    return Member.register_member(request, StaffSerializer)
