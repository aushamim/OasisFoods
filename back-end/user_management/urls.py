from rest_framework.routers import DefaultRouter
from django.urls import path, include

from user_management.views import ProfileViewset, RegistrationViewset, UserLogin

router = DefaultRouter()
router.register("list", ProfileViewset)
urlpatterns = [
    path("", include(router.urls)),
    path("login/", UserLogin.as_view(), name="login"),
    path("register/", RegistrationViewset.as_view(), name="register"),
]
