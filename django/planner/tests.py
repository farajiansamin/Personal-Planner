from django.test import TestCase
from django.contrib.auth.models import User
from django.urls import reverse
from rest_framework.test import APIClient
from .models import Profile, Category, Goal, Task

class ProfileModelTests(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='12345')
        self.profile = Profile.objects.create(user=self.user)

    def test_profile_creation(self):
        self.assertEqual(self.profile.user.username, 'testuser')

class CategoryModelTests(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='12345')
        self.category = Category.objects.create(name='Health', user=self.user)

    def test_category_creation(self):
        self.assertEqual(self.category.name, 'Health')
        self.assertEqual(self.category.user.username, 'testuser')

class GoalModelTests(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='12345')
        self.category = Category.objects.create(name='Health', user=self.user)
        self.goal = Goal.objects.create(
            user=self.user,
            title='Test Goal',
            goal_type='M',
            category=self.category
        )

    def test_goal_creation(self):
        self.assertEqual(self.goal.title, 'Test Goal')
        self.assertEqual(self.goal.goal_type, 'M')
        self.assertEqual(self.goal.category.name, 'Health')

class TaskModelTests(TestCase):
    def setUp(self):
        self.task = Task.objects.create(
            title='Test Task',
            month=5,
            week=2,
            day='2023-05-15'
        )

    def test_task_creation(self):
        self.assertEqual(self.task.title, 'Test Task')
        self.assertEqual(self.task.month, 5)
        self.assertEqual(self.task.week, 2)
        self.assertEqual(self.task.day.strftime('%Y-%m-%d'), '2023-05-15')

class ViewTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(username='testuser', password='12345')
        self.client.login(username='testuser', password='12345')
        self.category = Category.objects.create(name='Health', user=self.user)
        self.goal = Goal.objects.create(
            user=self.user,
            title='Test Goal',
            goal_type='M',
            category=self.category
        )

    def test_profile_view(self):
        response = self.client.get(reverse('profile-list'))
        self.assertEqual(response.status_code, 200)

    def test_category_view(self):
        response = self.client.get(reverse('category-list'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Health')

    def test_goal_view(self):
        response = self.client.get(reverse('goal-list'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Test Goal')

    def test_task_view(self):
        response = self.client.get(reverse('task-list'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Test Task')
