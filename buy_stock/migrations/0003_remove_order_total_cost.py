# Generated by Django 3.1.1 on 2020-12-08 16:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('buy_stock', '0002_auto_20201201_1144'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='total_cost',
        ),
    ]
