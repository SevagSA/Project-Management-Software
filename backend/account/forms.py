from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.forms import widgets
from .models import Member


class UserRegistrationForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = Member
        fields = UserCreationForm.Meta.fields + \
            ("email", "first_name", "last_name",)


class UserLoginForm(forms.Form):
    email = forms.EmailField()
    password = forms.CharField(widget=forms.PasswordInput())

    def clean_email(self):
        email = self.cleaned_data["email"]
        if not Member.objects.filter(email__iexact=email).exists():
            raise forms.ValidationError("Member does not exist.")
        return email


class UserUpdateForm(forms.ModelForm):
    class Meta:
        model = Member
        fields = ["email", "first_name", "last_name"]
