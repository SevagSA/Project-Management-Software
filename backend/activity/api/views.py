from functools import partial
from django.http import Http404

from rest_framework import viewsets

from .serializers import ProjectSerializer, TaskSerializer
from .permissions import IsAuthorizedOrReadOnly

from activity.models import Project, Task
from account.models import Staff


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [partial(IsAuthorizedOrReadOnly, False)]

    def perform_create(self, serializer):
        try:
            staff = Staff.objects.get(member=self.request.user)
        except Staff.DoesNotExist:
            raise Http404
        serializer.save(project_manager=staff)


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [partial(IsAuthorizedOrReadOnly, True)]
