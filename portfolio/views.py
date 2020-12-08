from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from cash.models import Account
from buy_stock.models import Order 
import json
from django.contrib import messages

def showMessage(request, msg):
    messages.info(request, msg)

@login_required(login_url='/login/')
def portfolio(request):
    user = request.user; 
    user_account = Account.objects.filter(user=user).first()
    if user_account:  
        if user_account.remain_cash <= 0:
            showMessage(request, 'You need to add some money to your account')
            return redirect('add_cash')
        stocks = Order.objects.filter(user_account=user_account)
        if not stocks:
            showMessage(request, "You don't have any stock now. Buy some to have a fun!")
            return redirect('buy_stock')
        json_stocks = json.dumps(list(Order.objects.filter(user_account=user_account).values()))
        stocks = {'json_stocks' : json_stocks, 'stocks' : stocks}
        return render(request, 'portfolio/portfolio.html', stocks)
    else:
        # messages.info(request, 'You need to add some cash to your account')
        showMessage(request, 'You need to add some money to your account')
        return redirect('add_cash')