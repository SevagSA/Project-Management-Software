from django.urls import path
from .views import (
    register_administrator,
    register_staff,
    get_all_staff_role_choices,
    blacklist_token,
    UpdateAdministratorAPIView
)
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

app_name = "account_api"
urlpatterns = [
    path("register-administrator/", register_administrator),

    path("register-staff/", register_staff),
    path("staff-role-choices/", get_all_staff_role_choices),

    path("member/administrator/<int:pk>/update",
         UpdateAdministratorAPIView.as_view()),

    # JWT
    path('token/', TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path('token/refresh/', TokenRefreshView.as_view(), name="token_refresh"),
    path("logout/blacklist_token/", blacklist_token),
]
