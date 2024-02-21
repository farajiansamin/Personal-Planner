# Generated by Django 4.2.10 on 2024-02-20 05:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('planner', '0004_alter_category_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='goal',
            name='day',
            field=models.IntegerField(blank=True, help_text='Specific date for Daily goals', null=True),
        ),
        migrations.AlterField(
            model_name='goal',
            name='week',
            field=models.IntegerField(blank=True, help_text='Week number in a month, for Weekly goals', null=True),
        ),
    ]
