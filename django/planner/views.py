from django.shortcuts import render
from rest_framework import viewsets, generics, permissions
from .models import Goal, Category, Task, Profile
from .serializers import (GoalSerializer, CategorySerializer, TaskSerializer, ProfileSerializer)



#generics.ListAPIView


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class GoalViewSet(viewsets.ModelViewSet):
    serializer_class = GoalSerializer
    permission_classes = [permissions.AllowAny]
    
    def get_queryset(self):
        """
        Optionally restricts the returned goals to a given week, 
        by filtering against a `week`, `day`, `month`, and `category` query parameter in the URL.
        """
        queryset = Goal.objects.all()
        week = self.request.query_params.get('week')
        day = self.request.query_params.get('day')
        month = self.request.query_params.get('month')
        category = self.request.query_params.get('category')
        completed = self.request.query_params.get('completed')  

        # Handle 'null' string for week
        if week == 'null':
            queryset = queryset.filter(week__isnull=True)
        elif week is not None:
            queryset = queryset.filter(week=week)

        # Handle 'null' string for day
        if day == 'null':
            queryset = queryset.filter(day__isnull=True)
        elif day is not None:
            queryset = queryset.filter(day=day)

        # Handle 'null' string for month
        if month == 'null':
            queryset = queryset.filter(month__isnull=True)
        elif month is not None:
            queryset = queryset.filter(month=month)

        # Filter by category
        if category is not None:
            queryset = queryset.filter(category__id=category)  # Assuming 'category' is a ForeignKey in Goal

        if completed is not None:
            completed_bool = completed.lower() == 'true'  # Directly convert 'true' or 'false' string to boolean
            queryset = queryset.filter(completed=completed_bool)    

        return queryset
    
    



