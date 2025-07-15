from django.urls import path
from .views import UserRegistrationView, VerifyAccountView
from .views import LoginAPI


urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('verify/', VerifyAccountView.as_view(), name='verify'),
    path('login/', LoginAPI.as_view(), name='login'),

]
