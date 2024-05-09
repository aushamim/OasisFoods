from rest_framework import serializers
from django.contrib.auth.models import User
from user_management.models import Profile


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "first_name", "last_name", "email", "date_joined"]


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Profile
        fields = "__all__"


class RegistrationSerilizer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(required=True)
    phone_no = serializers.CharField(required=True)
    address = serializers.CharField(required=True)

    class Meta:
        model = User
        fields = [
            "username",
            "first_name",
            "last_name",
            "email",
            "phone_no",
            "address",
            "password",
            "confirm_password",
        ]

    def save(self):
        username = self.validated_data["username"]
        first_name = self.validated_data["first_name"]
        last_name = self.validated_data["last_name"]
        email = self.validated_data["email"]
        phone_no = self.validated_data["phone_no"]
        address = self.validated_data["address"]
        password1 = self.validated_data["password"]
        password2 = self.validated_data["confirm_password"]

        if password1 != password2:
            raise serializers.ValidationError({"error": "Password didn't match"})

        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError(
                {"error": "A user already exists using this email."}
            )

        account = User(
            username=username, first_name=first_name, last_name=last_name, email=email
        )
        account.set_password(password1)
        account.save()

        profile = Profile(user=account, phone_no=phone_no, address=address)
        profile.save()

        return account


class LoginSerilizer(serializers.Serializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True)
