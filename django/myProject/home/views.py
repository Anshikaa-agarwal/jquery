from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    context = {
        'variable': "Anshika"
    }
    return render(request, 'index.html', context)

def about(request):
    return HttpResponse("this is about page")

def contact(request):
    return HttpResponse("this is contact us page")