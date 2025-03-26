from django.shortcuts import render
from django.http import JsonResponse

def api_home(request):
    return JsonResponse({"message": "Backend conectado com sucesso!"})

