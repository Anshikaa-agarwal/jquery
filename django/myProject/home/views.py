from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("this is homepage")
def contact(request):
    return HttpResponse("this is contact page")
def about(request):
    return HttpResponse("this is about page")
def yo(request):
    return HttpResponse("yo")