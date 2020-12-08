from django.contrib import admin
from django.urls import path, include
from portfolio import views as portfolio_views
from cash import views as cash_views
from buy_stock import views as buy_stock_views 
from sell_stock import views as sell_stock_views

# Import and Initialize router for API 
from rest_framework import routers
router = routers.DefaultRouter()
# Register all of Urls
router.register(r'users', cash_views.UserViewSet)
router.register(r'accounts', cash_views.AccountViewSet)
router.register(r'orders', buy_stock_views.OrderViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', portfolio_views.portfolio, name='portfolio'),
    path('', include('users.urls')),
    path('add/', cash_views.add_cash, name='add_cash'), 
    path('', include('buy_stock.urls')),
    path('sell', sell_stock_views.sell_stock, name='sell_stock'),
    path('', include('journal.urls')),
    path('api/v1/', include(router.urls)),
    # This is for making sure that user is authenticated before accessing the Api
    path('api-auth/v1/', include('rest_framework.urls', namespace='rest_framework'))
]
