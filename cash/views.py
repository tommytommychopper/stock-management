from django.shortcuts import render, redirect
from .forms import AddCashForm
from .models import Account

# Create your views here.
def add_cash(request):
    form = AddCashForm()
    if request.method == 'POST':
        form = AddCashForm(request.POST)
        if form.is_valid():
            user = request.user
            account = Account.objects.filter(user=user).first()
            total = form.cleaned_data['cash']
            if account: 
                account.total += total 
                account.user = user
                account.save()
                return redirect('/')
            else:
                Account(user=user, total=total).save()
            return redirect('/')
    content = {'form' : form }
    return render(request, 'cash/cash.html', content)