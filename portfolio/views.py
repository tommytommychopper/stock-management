from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from cash.models import Account
from buy_stock.models import Order 
import json
from django.contrib import messages


@login_required(login_url='/login/')
def portfolio(request):
    user = request.user; 
    user_account = Account.objects.filter(user=user).first()
    if user_account:  
        if user_account.remain_cash <= 0:
            messages.warning(request, 'You need to add some money to your account')
            return redirect('add_cash')
        stocks = Order.objects.filter(user_account=user_account)
        if not stocks:
            messages.warning(request, "You don't have any stock now. Buy some to have a fun!")
            return redirect('buy_stock')
        total_cash = user_account.remain_cash
        json_stocks = json.dumps(list(Order.objects.filter(user_account=user_account).values()))
        assets = {'json_stocks' : json_stocks, 'stocks' : stocks, 'total_cash' : total_cash}
        messages.warning(request, "5 API requests per minute. 500 requests per day.")
        return render(request, 'portfolio/portfolio.html', assets)
    else:
        messages.warning(request, 'You need to add some money to your account')
        return redirect('add_cash')