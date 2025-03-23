from django.contrib import admin
from django.urls import path
from home import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", views.index, name="index"),
    path("contact", views.contact, name="contact"),
    path("about", views.about, name="contact"),
    path("about/yo", views.yo, name="yo")
]
