from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.forms import widgets
from .models import User


class UserRegistrationForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = User
        fields = UserCreationForm.Meta.fields + \
            ("email", "username", "first_name", "last_name",)


class UserLoginForm(forms.Form):
    email = forms.EmailField()
    password = forms.CharField(widget=forms.PasswordInput())

    def clean_email(self):
        email = self.cleaned_data["email"]
        if not User.objects.filter(email__iexact=email).exists():
            raise forms.ValidationError("User does not exist.")
        return email


class UserUpdateForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ["email", "username", "first_name", "last_name"]
