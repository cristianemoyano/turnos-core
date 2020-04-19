from django.db import models
from django.contrib.auth.models import User


class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)


class Todo(models.Model):
    task = models.CharField(max_length=255)
    owner = models.ForeignKey(
        User,
        related_name="todos",
        on_delete=models.CASCADE,
        null=True
    )
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.task
