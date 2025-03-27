from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name

class Student(models.Model):
    name = models.CharField(max_length=100)
    roll_num = models.CharField(max_length=20, unique=True)
    email = models.EmailField()
    dob = models.DateField()
    gpa = models.DecimalField(max_digits=4, decimal_places=2),
    phone = models.PositiveIntegerField()
    desc = models.TextField()
    desc = models.TextField()

def __str__(self):
    return self.name