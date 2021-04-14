from rest_framework import permissions
from django.conf import settings

from account.models import Staff


class IsAuthorizedOrReadOnly(permissions.BasePermission):
    def __init__(self, is_task):
        super().__init__()
        self.is_task = is_task

    def has_permission(self, request, view):
        # Only logged in members have permission
        if not request.user.is_authenticated:
            return False

        # Read permissions are allowed to any request
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions are allowed to admin, and staff with a role of PM
        if view.action == "create" or \
            view.action == "update" or \
                view.action == "destroy":
            if request.user.is_organization_staff:
                return request.user.staff.role == settings.PM
            return request.user.is_organization_admin
        return False

    def has_object_permission(self, request, view, obj):
        # Only logged in members have object permission
        if not request.user.is_authenticated:
            return False

        project_manager = obj.project_manager.member if not self.is_task \
            else obj.project.project_manager.member

        # Read permissions are allowed to any request, within the same organization
        if request.method in permissions.SAFE_METHODS:
            return request.user.organization == project_manager.organization

        # Write permissions are allowed if:
        # the obj is a project and the request.user is either:
        #   1. The project manager of the project
        #   2. The admin of the organization that the project belongs to
        # else:
        #   1. The project manager of the task's project
        #   2. The admin of the organization that the task belongs to
        if not self.is_task:
            return project_manager == request.user or \
                project_manager.is_current_organization_admin(request.user)
        else:
            return project_manager == request.user or \
                project_manager.is_current_organization_admin(request.user)
