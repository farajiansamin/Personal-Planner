from django.urls import path, include  # include is necessary for including router urls
from .views import  GoalViewSet, CategoryViewSet, TaskViewSet, ProfileViewSet
from rest_framework.routers import DefaultRouter

app_name = "planner"

router = DefaultRouter()
router.register(r'profiles', ProfileViewSet, basename='profiles')
router.register(r'tasks', TaskViewSet, basename='tasks')
router.register(r'categories', CategoryViewSet, basename='categories')
router.register(r'goals', GoalViewSet, basename='monthly_goals')


# Here, you include the router's urls into urlpatterns
urlpatterns = [
    path("", include(router.urls)),
]

