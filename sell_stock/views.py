from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from cash.models import Account
from buy_stock.models import Order 
import json 
from django.contrib import messages

def showMessage(request, msg):
    messages.info(request, msg)

@login_required(login_url='/login/')
def sell_stock(request):
    if request.method == 'POST':
        user = request.user
        user_account = Account.objects.filter(user=user).first()
        ticker = request.POST.get('ticker')
        cur_price = float(request.POST.get('current_price'))
        total_share = int(request.POST.get('total_share'))
        total_profit = float(request.POST.get('total_profit'))
        stock = Order.objects.filter(user_account=user_account, ticker=ticker).first()
        if stock:
            stock.total_share -=  total_share
            stock.save()
            user_account.remain_cash += total_profit
            user_account.save()
            if total_profit >= 0:
                showMessage(request, f"You successfully sold {total_share} of {ticker} at const of {cur_price}. The profit is +{total_profit}.")
            else:
                showMessage(request, f"You successfully sold {total_share} of {ticker} at const of {cur_price}. The loss is {total_profit}.")
            return redirect('/')
    else:
        user = request.user;
        user_account = Account.objects.filter(user=user).first()
        stocks = Order.objects.filter(user_account=user_account)
        json_stocks = json.dumps(list(Order.objects.filter(user_account=user_account).values()))
        stocks = {'json_stocks':json_stocks, 'stocks' : stocks}
        return render(request, 'sell_stock/sell_stock.html', stocks)
