from django.shortcuts import render
from rest_framework import viewsets, generics
from rest_framework.response import Response

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


class CategoryViewset(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def list(self, request):
        id = request.query_params.get("id")
        if id:
            queryset = self.queryset.filter(id=id)
            serializer = self.serializer_class(queryset, many=True)
            return Response(serializer.data)
        else:
            return Response(
                {
                    "message": "Please provide a category id parameter in the request. Link example '/products/category/?id=<id>'"
                },
                status=400,
            )
