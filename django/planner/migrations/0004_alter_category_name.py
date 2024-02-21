# Generated by Django 4.2.10 on 2024-02-19 00:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('planner', '0003_goal_remove_monthlygoal_category_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='name',
            field=models.CharField(choices=[('Health', 'Health'), ('Career', 'Career'), ('Relationship', 'Relationship'), ('Entertainment', 'Entertainment')], max_length=100, unique=True),
        ),
    ]
