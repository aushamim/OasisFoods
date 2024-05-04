from django.contrib import admin

from products.models import Cart, Category, Product, Sale

# Register your models here.
admin.site.register(Sale)
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Cart)
