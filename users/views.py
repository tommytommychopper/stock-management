from django.shortcuts import render, redirect
from django.http import HttpResponse
from .forms import RegisterForm, LoginForm
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

# Create your views here.
def register(request):
    form = RegisterForm()
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    context = {'form' : form}
    return render(request, 'users/register.html', context)

def login_user(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password =request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user:
            if user.is_active:
                login(request, user)
                return redirect('portfolio')
            else:
                messages.info(request, 'Your account is not active')
        else:
            messages.info(request, 'Username OR password is incorrect')
    return render(request, 'users/login.html')

def logout_user(request):
    logout(request)
    return redirect('login')
