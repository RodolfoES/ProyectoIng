from django.shortcuts import render

from rest_framework import generics, status
from rest_framework.response import Response
from .models import CustomUser
from .serializers import UserSerializer
from knox.views import LoginView as KnoxLoginView
from django.contrib.auth import login
from rest_framework.authtoken.serializers import AuthTokenSerializer

class UserRegistrationView(generics.CreateAPIView):
    serializer_class = UserSerializer

class VerifyAccountView(generics.GenericAPIView):
    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        codigo = request.data.get('codigo')
        try:
            user = CustomUser.objects.get(email=email)
            if user.codigo_verificacion == codigo:
                user.verificado = True
                user.save()
                return Response({"msg": "Cuenta verificada con éxito"}, status.HTTP_200_OK)
            else:
                return Response({"error": "Código incorrecto"}, status.HTTP_400_BAD_REQUEST)
        except CustomUser.DoesNotExist:
            return Response({"error": "Usuario no encontrado"}, status.HTTP_404_NOT_FOUND)
        
class LoginAPI(KnoxLoginView):
    permission_classes = []

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginAPI, self).post(request, format=None)
