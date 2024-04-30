from rest_framework.routers import DefaultRouter
from django.urls import path, include

from products.views import (
    AllProductViewset,
    BestSellerProductViewset,
    CategoryViewset,
    FeaturedProductViewset,
)

router = DefaultRouter()
router.register("all", AllProductViewset, basename="all-products")
router.register("featured", FeaturedProductViewset, basename="featured-products")
router.register(
    "best_seller", BestSellerProductViewset, basename="best-seller-products"
)

urlpatterns = [
    path("", include(router.urls)),
    path("category/<int:id>/", CategoryViewset.as_view(), name="category-detail"),
]
