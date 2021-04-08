from django.urls import path
from .views import (
    register_administrator,
    register_staff
)
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

app_name = "account_api"
urlpatterns = [
    path("register-administrator/", register_administrator,
         name="register-administrator"),
    path("register-staff/", register_staff, name="register-staff"),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
