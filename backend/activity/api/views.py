from functools import partial

from django.http import Http404
from django.conf import settings

from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes

from .serializers import ProjectSerializer, TaskSerializer
from .permissions import IsAuthorizedOrReadOnly

from activity.models import Project, Task
from account.models import Staff
from account.api.serializers import StaffSerializerForProjectSelect


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [partial(IsAuthorizedOrReadOnly, False)]


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [partial(IsAuthorizedOrReadOnly, True)]


# TODO getting all staff/project manager from the DB is
# probably not the most efficient thing to do.
# Consider lazy loading the data, i.e. when the
# user scrolls far enough in the dropdown (the one to select a staff)
# load 10 more staff. e.g. You can use pagination with WS.

@api_view(["GET", ])
@permission_classes((IsAuthenticated,))
def get_eligible_project_manager_for_project(request):
    project_managers = Staff.objects.get_eligible_project_manager_for_project(
        request.user.organization)
    serializer = StaffSerializerForProjectSelect(project_managers, many=True)
    return Response({"project_managers": serializer.data}, status=status.HTTP_200_OK)


@api_view(["GET", ])
@permission_classes((IsAuthenticated,))
def get_eligible_staff_for_project(request):
    staff_members = Staff.objects.get_eligible_staff_for_project(
        request.user.organization)
    serializer = StaffSerializerForProjectSelect(staff_members, many=True)
    return Response({"staff_members": serializer.data}, status=status.HTTP_200_OK)


@api_view(["GET", ])
@permission_classes((IsAuthenticated,))
def get_all_activity_status_choices(request):
    return Response({"statuses": settings.ACTIVITY_STATUS}, status=status.HTTP_200_OK)
