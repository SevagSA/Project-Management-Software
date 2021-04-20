from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    ProjectViewSet,
    TaskViewSet,
    get_eligible_staff_for_project,
    get_all_activity_status_choices,
    get_eligible_project_manager_for_project
)

router = DefaultRouter()
router.register(r"projects", ProjectViewSet)
router.register(r"tasks", TaskViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("get-eligible-staff-for-project/", get_eligible_staff_for_project),
    path("get-eligible-project-manager-for-project/",
         get_eligible_project_manager_for_project),
    path("get-all-activity-status-choices/", get_all_activity_status_choices),
]
