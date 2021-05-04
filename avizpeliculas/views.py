from django.shortcuts import render, redirect, get_object_or_404
from .models import Genre, Movie


# Create your views here.


def index(request):

    return render(
        request,
        'index.html',
    )

def catalogo(request):

    return render(
        request,
        'catalogo.html'
    )

def loginSuscribe(request):

    return render(
        request,
        'loginSuscribe.html'
    )