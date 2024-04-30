from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone_no = models.CharField(max_length=12)
    address = models.CharField(max_length=200)

    def __str__(self) -> str:
        return f"{self.user.username}'s profile"
