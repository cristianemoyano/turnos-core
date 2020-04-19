from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('edit/<int:pk>', views.TodoDetailView.as_view()),
    path('delete/<int:pk>', views.TodoDetailView.as_view()),
]
