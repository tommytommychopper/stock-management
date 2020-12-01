from django.shortcuts import render, redirect

# Create your views here.
def sell_stock(request):
    return render(request, 'sell_stock/sell_stock.html')
