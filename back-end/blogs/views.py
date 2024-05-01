from rest_framework import viewsets
from rest_framework.response import Response

from blogs.models import Blog, Comment
from blogs.serializers import BlogSerializer, CommentSerializer


# Create your views here.
class AllBlogViewset(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer


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
