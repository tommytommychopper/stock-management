from rest_framework import serializers
from .models import Order
from cash.serializers import AccountSerializer

# Create one class for each of models that you want to expose through my rest API
# Use hyperlinkedModelSerializer for exposing my HTML discoverable rest API 
class OrderSerializer(serializers.HyperlinkedModelSerializer):
    user_account = AccountSerializer(required=False)
    class Meta:
        model = Order
        fields = '__all__'