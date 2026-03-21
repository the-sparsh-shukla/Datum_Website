from django.urls import path
from .views import (
    TeamMemberListCreateView, TeamMemberDetailView,
    AchievementListCreateView, AchievementDetailView,
)

urlpatterns = [
    path('members/', TeamMemberListCreateView.as_view(), name='team-list-create'),
    path('members/<int:pk>/', TeamMemberDetailView.as_view(), name='team-detail'),
    path('achievements/', AchievementListCreateView.as_view(), name='achievement-list-create'),
    path('achievements/<int:pk>/', AchievementDetailView.as_view(), name='achievement-detail'),
]
