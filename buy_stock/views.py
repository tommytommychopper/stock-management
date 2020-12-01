from django.shortcuts import render, redirect
from .models import Order
from cash.models import Account

# Create your views here.
def buy_stock(request):
    if request.method == 'POST':
        user = request.user
        user_account = Account.objects.filter(user=user).first()
        ticker = request.POST.get('ticker')
        acquisition_cost = float(request.POST.get('current_price'))
        total_share = int(request.POST.get('total_share'))
        total_cost = float(request.POST.get('total_cost'))
        stock = Order.objects.filter(user_account=user_account, ticker=ticker).first()
        if stock:
            stock.total_share +=  total_share
            stock.total_cost += total_cost
            stock.acquisition_cost = (stock.acquisition_cost + acquisition_cost) / total_share
            stock.save()
        else:
            new_order = Order(user_account=user_account, ticker= ticker, acquisition_cost=acquisition_cost, total_share=total_share, total_cost=total_cost)
            new_order.save()
        user_account.remain_cash -= total_cost
        user_account.save()
        redirect('/')
    return render(request, 'buy_stock/buy_stock.html')