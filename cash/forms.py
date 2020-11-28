from .models import Account
from django.forms import ModelForm, TextInput
from django import forms

class AddCashForm(forms.Form):
    cash = forms.IntegerField(label='Cash', widget=forms.TextInput(attrs={'class' : 'form-control'}))
    # class Meta:
    #     model = Account
    #     fields = ['cash']
    #     widgets = {
    #         'cash' : forms.TextInput(attrs={'class' : 'form-control'}),
    #     }
    