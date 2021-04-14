from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path("api/account/", include("account.api.urls", namespace="account")),
    path("api/activity/", include("activity.api.urls")),
    path("api/notification/", include("notification.api.urls")),
    path("admin/", admin.site.urls),

    # catch if the url is just the domain name
    path("", TemplateView.as_view(template_name="index.html")),
    # the "/" is not optional to catch django urls, like admin/,
    # because if it is optional and the user harcodes "domain/admin"
    # w/o the "/", the url will be handled by React.
    re_path(r"^(?:.*)/$", TemplateView.as_view(template_name="index.html")),
]
