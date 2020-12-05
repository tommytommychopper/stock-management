from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from cash.models import Account
from buy_stock.models import Order 
import json

@login_required(login_url='/login/')
def portfolio(request):
    user = request.user; user_account = Account.objects.filter(user=user).first()
    stocks = Order.objects.filter(user_account=user_account).first()
    json_stocks = json.dumps(list(Order.objects.filter(user_account=user_account).values()))
    stocks = {'json_stocks' : json_stocks, 'stocks' : stocks}
    return render(request, 'portfolio/portfolio.html', stocks)