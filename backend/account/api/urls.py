from django.urls import path
from .views import (
    register_administrator,
    register_staff
)

app_name = "account_api"
urlpatterns = [
    path("register-administrator/", register_administrator,
         name="register-administrator"),
    path("register-staff/", register_staff, name="register-staff"),
]
