from django.conf import settings

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated


from .serializers import AdministratorSerializer, StaffSerializer

from account.models import Member


@api_view(["POST", ])
def register_administrator(request):
    return Member.register_member(request, AdministratorSerializer)


@api_view(["POST", ])
def register_staff(request):
    return Member.register_member(request, StaffSerializer)


@api_view(["GET", ])
def get_all_staff_role_choices(request):
    return Response({"roles": settings.STAFF_ROLES}, status=status.HTTP_200_OK)
