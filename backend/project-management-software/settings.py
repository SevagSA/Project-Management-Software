import environ
from pathlib import Path
from datetime import timedelta

env = environ.Env(
    DEBUG=(bool, False)
)

environ.Env.read_env()

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = env("SK")
DEBUG = env("DEBUG")

ALLOWED_HOSTS = []
AUTH_USER_MODEL = "account.Member"


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # local
    'account',
    'chat',
    'activity',
    'notification',

    # 3rd party
    'rest_framework',
    'corsheaders',
    'rest_framework_simplejwt.token_blacklist',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'project-management-software.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            BASE_DIR / "templates",
            BASE_DIR / "../frontend/build"
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'project-management-software.wsgi.application'

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    )
}

SIMPLE_JWT = {
    "ACCEDD_TOKEN_LIFETIME": timedelta(seconds=20)
}

# CORS_ALLOWED_ORIGINS = ["http://localhost:3000"]

# Database
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': env("NAME"),
        'USER': env("USER"),
        'PASSWORD': env("PASSWORD"),
        'HOST': env("HOST"),
        'PORT': env("PORT"),
    }
}


# Password validation
# https://docs.djangoproject.com/en/2.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/2.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.2/howto/static-files/

STATIC_URL = '/static/'
STATICFILES_DIRS = [
    BASE_DIR / "../frontend/build/static",
]

LOGIN_URL = "/login/"

# Activity model

TODO = "Todo"
IN_PROGRESS = "In progress"
COMPLETED = "Completed"
ON_HOLD = "On hold"

ACTIVITY_STATUS = (
    (TODO, "Todo"),
    (IN_PROGRESS, "In progress"),
    (COMPLETED, "Completed"),
    (ON_HOLD, "On hold"),
)

# Account model
PM = "Project Manager"
FULL_STACK_DEVELOPER = "Full-Stack Developer"
UX_DESIGNER = "UX Designer"
PRODUCT_MANAGER = "Product Manager"
BACKEND_DEVELOPER = "Backend Developer"
FRONTEND_DEVELOPER = "Frontend Developer"
STAFF_MEMBER = "Staff member"

STAFF_ROLES = (
    (PM, "Project Manager"),
    (FULL_STACK_DEVELOPER, "Full-Stack Developer"),
    (UX_DESIGNER, "UX Designer"),
    (PRODUCT_MANAGER, "Product Manager"),
    (BACKEND_DEVELOPER, "Backend Developer"),
    (FRONTEND_DEVELOPER, "Frontend Developer"),
    (STAFF_MEMBER, "Staff member"),
)
