from rest_framework import viewsets, permissions

from .serializers import NotificationSerializer
from notification.models import Notification


class NotificationViewset(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer
    # TODO add custom permissions
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,]
