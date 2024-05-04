from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from django.contrib.auth.models import User

from products.models import Cart, Category, Product, Sale
from products.serializers import (
    CartSerializer,
    CategorySerializer,
    ProductSerializer,
    SaleSerializer,
)


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


class AllCategoryViewset(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class SaleViewset(viewsets.ModelViewSet):
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer


class CartViewset(viewsets.ModelViewSet):
    serializer_class = CartSerializer

    def get_queryset(self):
        queryset = Cart.objects.all()
        user_id = self.request.query_params.get("user_id")
        product_id = self.request.query_params.get("product_id")

        if user_id is not None and product_id is not None:
            queryset = queryset.filter(user=user_id, product__id=product_id)
            return queryset

        if user_id is not None:
            queryset = queryset.filter(user=user_id)
            return queryset

        if product_id is not None:
            queryset = queryset.filter(product__id=product_id)
            return queryset

        return queryset

    def create(self, request, *args, **kwargs):
        user_id = self.request.query_params.get("user_id")
        product_id = self.request.query_params.get("product_id")
        quantity = self.request.query_params.get("quantity")
        add_to_cart = self.request.query_params.get("add_to_cart")

        if quantity is not None:
            print("\n\naaaaaaaaaaaaaaaaaaaaaaa\n\n")
            if user_id is not None and product_id is not None:
                queryset = self.get_queryset().filter(
                    user=user_id, product__id=product_id
                )
                cart_item = queryset.first()
                cart_item.quantity = quantity
                cart_item.save()

                return Response(
                    {"message": "Cart item updated successfully."},
                    status=status.HTTP_201_CREATED,
                )
            else:
                return Response(
                    {
                        "message": "Both 'user_id' and 'product_id' are required when updating quantity."
                    },
                    status=status.HTTP_400_BAD_REQUEST,
                )

        if add_to_cart == "True":
            if user_id is not None and product_id is not None:
                product = Product.objects.get(id=product_id)
                user = User.objects.get(id=user_id)

                queryset = self.get_queryset().filter(user=user, product=product)
                if queryset.exists():
                    return Response(
                        {"message": "Cart item already exists."},
                        status=status.HTTP_400_BAD_REQUEST,
                    )

                Cart.objects.create(user=user, product=product)
                return Response(
                    {"message": "Cart item created successfully."},
                    status=status.HTTP_201_CREATED,
                )
            else:
                return Response(
                    {
                        "message": "Both 'user_id' and 'product_id' are required when 'add_to_cart' is 'True'."
                    },
                    status=status.HTTP_400_BAD_REQUEST,
                )

        return super().create(request, *args, **kwargs)

    def list(self, request):
        user_id = self.request.query_params.get("user_id")
        product_id = self.request.query_params.get("product_id")

        if user_id is None and product_id is None:
            return Response(
                {
                    "message": "Please provide user id '(optional) and product id' in the request. Link example '/products/cart/?user_id=<user_id>&product_id=<product_id>'. Use '/products/cart/?user_id=<user_id>&product_id=<product_id>&quantity=<int>' to change product quantity"
                },
                status=400,
            )
        return super().list(request)
