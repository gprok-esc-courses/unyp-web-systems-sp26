from django.shortcuts import render
from .models import Article

# Create your views here.

def home(request):
    return render(request, 'home.html')


def articles(request):
    articles = Article.objects.all()
    return render(request, 'articles.html', {'articles': articles})
