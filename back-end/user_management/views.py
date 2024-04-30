from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from user_management.models import Profile
from user_management.serializers import (
    LoginSerilizer,
    ProfileSerializer,
    RegistrationSerilizer,
)


class ProfileViewset(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class RegistrationViewset(APIView):
    serializer_class = RegistrationSerilizer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            user = serializer.save()
            return Response("Registered")
        return Response(serializer.errors)


class UserLogin(APIView):
    def post(self, request):
        serializer = LoginSerilizer(data=self.request.data)
        if serializer.is_valid():
            username = serializer.validated_data["username"]
            password = serializer.validated_data["password"]
            user = authenticate(username=username, password=password)
            if user:
                token, _ = Token.objects.get_or_create(user=user)

                return Response({"token": token.key, "user_id": user.id})
            else:
                return Response({"error": "Invalid Username or Password"})
        return Response(serializer.errors)
