from django.urls import path
from .views import CrearItemView

urlpatterns = [
    path('crear/', CrearItemView.as_view(), name='crear_item'),
]
