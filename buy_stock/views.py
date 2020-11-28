from django.shortcuts import render

# Create your views here.
def buy_stock(request):
    return render(request, 'buy_stock/buy_stock.html')