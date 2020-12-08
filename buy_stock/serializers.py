from rest_framework import serializers
from .models import Order
from cash.models import Account
# from django.contrib.auth.models import User 

# class UserSerializer(serializers.HyperlinkedModelSerializer):
#      class Meta:
#         model = User
#         fields = ['username', 'email']

class OrderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        # user_account = Account
        # user = Account
        model = Order
        fields = ['ticker', 'total_share']