from django.shortcuts import render
from .models import Journal

def journal(request):
    user = request.user
    journals = Journal.objects.filter(user=user)
    journals = {'journals' : journals}
    return render(request, 'journal/journal.html', journals )

