from django.urls import path
from . import views

urlpatterns = [
    path('journal/', views.journal, name='journal'),
    path('view/<int:id>/', views.view_journal, name='view_journal'),
    path('add_journal/', views.add_journal, name='add_journal'),
    path('edit/<int:id>/', views.edit_journal, name='edit_journal'),
    path('delete/<int:id>/', views.delete_journal, name='delete_journal'),
]