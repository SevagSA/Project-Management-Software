from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import NotificationViewset

router = DefaultRouter()
router.register(r"", NotificationViewset)

urlpatterns = router.urls
