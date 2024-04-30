from django.db import models
from django.utils import timezone


# Create your models here.
class Sale(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
    discount = models.DecimalField(max_digits=5, decimal_places=2, default=0.00)
    time_until = models.DateField(blank=True, null=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.time_until:
            self.time_until = timezone.now().date() + timezone.timedelta(weeks=1)
        super().save(*args, **kwargs)


color_choices = (
    ("slate", "Slate"),
    ("red", "Red"),
    ("orange", "Orange"),
    ("yellow", "Yellow"),
    ("lime", "Lime"),
    ("green", "Green"),
    ("blue", "Blue"),
    ("purple", "Purple"),
    ("pink", "Pink"),
)


class Category(models.Model):
    name = models.CharField(max_length=100)
    color_category = models.CharField(max_length=20, choices=color_choices)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=100)
    category = models.ForeignKey(Category, null=True, on_delete=models.SET_NULL)
    image = models.ImageField(upload_to="product/", blank=True, null=True)
    price = models.DecimalField(max_digits=12, decimal_places=2)
    discount = models.DecimalField(max_digits=5, decimal_places=2, default=0.00)
    featured = models.BooleanField(default=False)
    best_seller = models.BooleanField(default=False)
    sale = models.ForeignKey(Sale, blank=True, null=True, on_delete=models.SET_NULL)

    def __str__(self) -> str:
        return self.name
