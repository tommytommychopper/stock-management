from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .forms import AddCashForm
from .models import Account
from django.contrib.auth.models import User
from django.contrib import messages

# For API
from rest_framework import viewsets 
from rest_framework import permissions
from .serializers import UserSerializer, AccountSerializer

@login_required(login_url='/login/')
def add_cash(request):
    form = AddCashForm()
    if request.method == 'POST':
        form = AddCashForm(request.POST)
        if form.is_valid():
            user = request.user
            account = Account.objects.filter(user=user).first()
            total = form.cleaned_data['cash']
            if account: 
                account.remain_cash += total 
                account.user = user
                account.save()
            else:
                Account(user=user, remain_cash=total).save()
            messages.success(request, f"You added {total} to your account.") 
            return redirect('/')
    content = {'form' : form }
    return render(request, 'cash/cash.html', content)

# APIs
# Link up serializer with views 
# Next tell Django about those endpoints
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

class AccountViewSet(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
    permission_classes = [permissions.IsAuthenticated]