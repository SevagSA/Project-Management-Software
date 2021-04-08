from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("account/", include("account.urls")),
    path("", TemplateView.as_view(template_name="index.html")),

    path("api/", include("project-management-software.api.urls")),
    path('api-auth/', include('rest_framework.urls')),
]
