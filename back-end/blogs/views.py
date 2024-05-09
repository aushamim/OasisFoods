from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework.response import Response

from blogs.models import Blog, Comment
from blogs.serializers import BlogSerializer, CommentSerializer, CreateCommentSerializer


# Create your views here.
class AllBlogViewset(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer


class BlogDetailsViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

    def list(self, request):
        blog_id = request.query_params.get("blog_id")
        if blog_id is not None:
            queryset = self.queryset.filter(id=blog_id)
            serializer = self.serializer_class(queryset, many=True)
            return Response(serializer.data)
        else:
            return Response(
                {
                    "message": "Please provide a blog id parameter in the request. Link example 'blogs/details/?blog_id=<blog_id>'"
                },
                status=400,
            )

    def create(self, request, *args, **kwargs):
        like = request.query_params.get("like")
        blog_id = request.query_params.get("blog_id")
        user_id = request.query_params.get("user_id")

        if blog_id is not None and user_id is not None and like is not None:
            blog = Blog.objects.get(id=blog_id)
            user = User.objects.get(id=user_id)
            if like == "like":
                blog.like_blog(user)
                blog.save()
                return Response(
                    {"message": "Post Liked"},
                    status=200,
                )
            if like == "unlike":
                blog.unlike_blog(user)
                blog.save()
                return Response(
                    {"message": "Post Unliked"},
                    status=200,
                )

        return super().create(request, *args, **kwargs)


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def list(self, request):
        blog_id = request.query_params.get("blog_id")
        if blog_id:
            queryset = self.queryset.filter(blog__id=blog_id)
            serializer = self.serializer_class(queryset, many=True)
            return Response(serializer.data)
        else:
            return Response(
                {
                    "message": "Please provide a blog_id parameter in the request. Link example 'blogs/comments/?blog_id=<blog_id>'"
                },
                status=400,
            )

    def create(self, request, *args, **kwargs):
        like = request.query_params.get("like")
        blog_id = request.query_params.get("blog_id")
        comment_id = request.query_params.get("comment_id")
        user_id = request.query_params.get("user_id")

        if (
            blog_id is not None
            and user_id is not None
            and like is not None
            and comment_id is not None
        ):
            comment = Comment.objects.get(id=comment_id, blog=blog_id)
            user = User.objects.get(id=user_id)

            if like == "like":
                comment.like_comment(user)
                comment.save()
                return Response(
                    {"message": "Comment Liked"},
                    status=200,
                )
            if like == "unlike":
                comment.unlike_comment(user)
                comment.save()
                return Response(
                    {"message": "Comment Unliked"},
                    status=200,
                )

        return super().create(request, *args, **kwargs)


class CommentCreateViewset(viewsets.ViewSet):
    def create(self, request):
        serializer = CreateCommentSerializer(data=request.data)
        if serializer.is_valid():
            comment = serializer.save()
            comment.blog.comments.add(comment)
            return Response(serializer.data)
        return Response(serializer.errors)
