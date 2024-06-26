from rest_framework.routers import DefaultRouter
from django.urls import path, include

from blogs.views import (
    AllBlogViewset,
    BlogDetailsViewSet,
    CommentCreateViewset,
    CommentViewSet,
)


router = DefaultRouter()
router.register("all", AllBlogViewset, basename="all-blogs")
router.register("details", BlogDetailsViewSet, basename="blog-details")
router.register("comments", CommentViewSet, basename="blog-comments")
router.register("create-comment", CommentCreateViewset, basename="create-comments")

urlpatterns = [
    path("", include(router.urls)),
]
