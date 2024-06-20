from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import permissions
from .serializers import TeacherSerializer
from .models import *
from  django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.contrib.auth.hashers import check_password

# Create your views here.
class TeacherList(generics.ListCreateAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer

class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer

@csrf_exempt
@require_POST
def teacher_login(request):
    email = request.POST.get('email')
    password = request.POST.get('password')

    if email is None or password is None:
        return JsonResponse({'bool': False, 'error': 'Email or Password not provided'}, status=400)

    try:
        teacher = Teacher.objects.get(email=email)
        if check_password(password, teacher.password):
            return JsonResponse({'bool': True})
        else:
            return JsonResponse({'bool': False, 'error': 'Invalid credentials'})
    except Teacher.DoesNotExist:
        return JsonResponse({'bool': False, 'error': 'Invalid credentials'})