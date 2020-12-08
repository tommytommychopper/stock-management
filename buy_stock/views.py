from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Order
from cash.models import Account

# Add class_based rest Api 
from rest_framework import viewsets 
from rest_framework import permissions
from .serializers import OrderSerializer
from django.contrib import messages

def errrorMessage(request, msg):
    messages.info(request, msg)

@login_required(login_url='/login/')
def buy_stock(request):
    if request.method == 'POST':
        user = request.user
        user_account = Account.objects.filter(user=user).first()
        ticker = request.POST.get('ticker')
        acquisition_cost = float(request.POST.get('current_price'))
        total_share = int(request.POST.get('total_share'))
        total_cost = float(request.POST.get('total_cost'))
        if total_cost > user_account.remain_cash:
            errrorMessage(request, "You don't have enough cash to buy")
            return redirect('add_cash')
        stock = Order.objects.filter(user_account=user_account, ticker=ticker).first()
        if stock:
            stock.acquisition_cost = ((stock.acquisition_cost * stock.total_share) + total_cost)  / (stock.total_share + total_share)
            stock.total_share +=  total_share
            stock.save()
        else:
            new_order = Order(user_account=user_account, ticker= ticker, acquisition_cost=acquisition_cost, total_share=total_share )
            new_order.save()
        user_account.remain_cash -= total_cost
        user_account.save()
        errrorMessage(request, f"You successfully bought {total_share} of {ticker} at cost of {acquisition_cost}")
        return redirect('/')
    return render(request, 'buy_stock/buy_stock.html')

# APIs
# Link up serializer with views 
# Next tell Django about this endpoints
class OrderViewSet(viewsets.ModelViewSet):
    # API endpoint that allows Order to be viewd or edited
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    # This one is for not allowing people to use RestAPI for Order unless they are authenticated.
    permission_classes = [permissions.IsAuthenticated]