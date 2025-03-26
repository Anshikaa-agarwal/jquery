from django.shortcuts import render
from .models import Student

def student_list(request):
    students = Student.object.all()
    return render(request, 'template.html', students)