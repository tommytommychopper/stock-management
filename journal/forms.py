from django.forms import ModelForm, TextInput, Textarea
from .models import Journal

class JournalForm(ModelForm):
    class Meta:
        model = Journal
        fields = ['description', 'content']
        widgets = {
            'description' : TextInput(attrs={'class':'form-control'}),
            'content' : Textarea(attrs={'class' : 'journal-form form-control'}),
        }
