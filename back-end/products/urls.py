from rest_framework.routers import DefaultRouter
from django.urls import path, include

from products.views import (
    AllCategoryViewset,
    AllProductViewset,
    BestSellerProductViewset,
    CategoryViewset,
    FeaturedProductViewset,
    SaleViewset,
)

router = DefaultRouter()
router.register("all", AllProductViewset, basename="all-products")
router.register("featured", FeaturedProductViewset, basename="featured-products")
router.register(
    "best_seller", BestSellerProductViewset, basename="best-seller-products"
)
router.register("all-categories", AllCategoryViewset, basename="all-categories")
router.register("category", CategoryViewset, basename="category-details")
router.register("sale", SaleViewset, basename="sale")

urlpatterns = [
    path("", include(router.urls)),
]
