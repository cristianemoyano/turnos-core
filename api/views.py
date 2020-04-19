from .models import Lead, Todo
from .serializers import LeadSerializer, TodoSerializer
from rest_framework import viewsets


class LeadListCreate(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer


class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
