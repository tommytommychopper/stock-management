from rest_framework import serializers
from .models import Account
from django.contrib.auth.models import User 

class UserSerializer(serializers.HyperlinkedModelSerializer):
    # url = serializers.HyperlinkedIdentityField(view_name="cash:user-detail")
    class Meta:
       model = User
       fields = ['username', 'email']

class AccountSerializer(serializers.HyperlinkedModelSerializer):
    # url = serializers.HyperlinkedIdentityField(view_name="cash:account-detail")
    user = UserSerializer(required=False)
    class Meta:
        model = Account
        fields = '__all__'
