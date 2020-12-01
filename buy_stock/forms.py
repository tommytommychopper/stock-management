from .models import Order 
from django.forms import ModelForm, TextInput
from django import forms

class OrderForm(ModelForm):
    class Meta:
        model = Order
        fields = ['ticker', 'acquisition_cost', 'total_share','total_cost']
    def __init__(self, *args, **kwargs):
       super(OrderForm, self).__init__(*args, **kwargs)
       for field in self.fields.values():
           field.widget.attrs['class'] = 'form-control'
