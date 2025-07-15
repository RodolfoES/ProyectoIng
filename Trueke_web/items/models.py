from django.db import models
from users.models import CustomUser

class Item(models.Model):
    titulo = models.CharField(max_length=100)
    descripcion = models.TextField()
    estado = models.CharField(max_length=50)
    imagen = models.ImageField(upload_to='items/', null=True, blank=True)
    usuario = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='items')
    creado_en = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo
