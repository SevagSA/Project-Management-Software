from django.urls import path, include
from rest_framework.routers import DefaultRouter

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from .views import (
    register_administrator,
    register_staff,
    get_all_staff_role_choices,
    blacklist_token,
    StaffViewSet
)

router = DefaultRouter()
router.register(r"staff", StaffViewSet)

app_name = "account_app"
urlpatterns = [
    path("", include(router.urls)),
    # TODO: Replace these with Viewsets and register in router
    path("register-administrator/", register_administrator),
    path("register-staff/", register_staff),
    path("staff-role-choices/", get_all_staff_role_choices),

    # JWT
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("logout/blacklist_token/", blacklist_token),
]
