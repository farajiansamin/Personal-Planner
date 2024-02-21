from django.contrib.auth.models import User
from django.db import models
import datetime


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

class Category(models.Model):
    CATEGORY_CHOICES = [
        ('Health', 'Health'),
        ('Career', 'Career'),
        ('Relationship', 'Relationship'),
        ('Entertainment', 'Entertainment'),
    ]
    name = models.CharField(max_length=100, choices=CATEGORY_CHOICES, unique=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='categories')

    def __str__(self):
        return self.name

    def __str__(self):
        return self.name

class Goal(models.Model):
    GOAL_TYPES = (
        ('M', 'Monthly'),
        ('W', 'Weekly'),
        ('D', 'Daily'),
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='goals')
    title = models.CharField(max_length=100)
    goal_type = models.CharField(max_length=1, choices=GOAL_TYPES)
    month = models.IntegerField(blank=True, null=True, help_text="Month as a number (1-12), for Monthly and Weekly goals")
    week = models.IntegerField(blank=True, null=True, help_text="Week number in a month, for Weekly goals")
    day = models.IntegerField(blank=True, null=True, help_text="Specific date for Daily goals")
    completed = models.BooleanField(default=False)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name='goals')

    def __str__(self):
        return f"{self.get_goal_type_display()} Goal: {self.title}"

class Task(models.Model):
    
    title = models.CharField(max_length=100)
    month = models.IntegerField(blank=True, null=True, help_text="Month as a number (1-12), for Monthly and Weekly goals")
    week = models.IntegerField(blank=True, null=True, help_text="Week number in the month, for Weekly goals")
    day = models.DateField(blank=True, null=True, help_text="Specific date for Daily goals")
    
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
