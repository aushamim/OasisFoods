from rest_framework import serializers

from blogs.models import Blog, Comment
from user_management.serializers import UserSerializer


class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = "__all__"


class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Comment
        fields = "__all__"


class CreateCommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = ["user", "blog", "body", "likes"]
