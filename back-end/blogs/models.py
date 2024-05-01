from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Blog(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=300)
    body = models.TextField()
    image = models.ImageField(upload_to="blogs/", blank=True, null=True)
    likes = models.ManyToManyField(User, blank=True, related_name="blog_likes")
    comments = models.ManyToManyField(
        "Comment", blank=True, related_name="blog_comments"
    )
    timestamp = models.DateTimeField(auto_now_add=True)

    def like_blog(self, user):
        self.likes.add(user)

    def unlike_blog(self, user):
        self.likes.remove(user)

    def __str__(self) -> str:
        return self.title


class Comment(models.Model):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    body = models.TextField()
    likes = models.ManyToManyField(User, blank=True, related_name="comment_likes")
    timestamp = models.DateTimeField(auto_now_add=True)

    def like_comment(self, user):
        self.likes.add(user)

    def unlike_comment(self, user):
        self.likes.remove(user)

    def __str__(self):
        return f"Comment by {self.user} on {self.blog.title}"
