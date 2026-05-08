from django.test import TestCase
from .models import User, Team, Activity, Workout, Leaderboard

class ModelTests(TestCase):
    def test_team_creation(self):
        team = Team.objects.create(name="Test Team")
        self.assertEqual(str(team), "Test Team")

    def test_user_creation(self):
        team = Team.objects.create(name="Test Team")
        user = User.objects.create_user(username="testuser", email="test@example.com", password="pass", team=team)
        self.assertEqual(str(user), "testuser")

    def test_activity_creation(self):
        team = Team.objects.create(name="Test Team")
        user = User.objects.create_user(username="testuser", email="test@example.com", password="pass", team=team)
        activity = Activity.objects.create(user=user, type="run", duration=30, distance=5.0)
        self.assertEqual(str(activity), "testuser - run")

    def test_workout_creation(self):
        workout = Workout.objects.create(name="Morning Cardio", description="Cardio session", duration=45)
        self.assertEqual(str(workout), "Morning Cardio")

    def test_leaderboard_creation(self):
        team = Team.objects.create(name="Test Team")
        user = User.objects.create_user(username="testuser", email="test@example.com", password="pass", team=team)
        leaderboard = Leaderboard.objects.create(user=user, points=100)
        self.assertEqual(str(leaderboard), "testuser: 100")
