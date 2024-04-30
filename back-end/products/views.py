from django.shortcuts import render
from rest_framework import viewsets, generics

from products.models import Category, Product
from products.serializers import CategorySerializer, ProductSerializer


# Create your views here.
class AllProductViewset(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class FeaturedProductViewset(viewsets.ModelViewSet):
    queryset = Product.objects.filter(featured=True)
    serializer_class = ProductSerializer


class BestSellerProductViewset(viewsets.ModelViewSet):
    queryset = Product.objects.filter(best_seller=True)
    serializer_class = ProductSerializer


class CategoryViewset(generics.RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = "id"
