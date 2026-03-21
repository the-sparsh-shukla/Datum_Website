from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import TeamMember, Achievement
from .serializers import TeamMemberSerializer, AchievementSerializer


class TeamMemberListCreateView(generics.ListCreateAPIView):
    """
    GET  /api/team/members/   — list active members (public)
    POST /api/team/members/   — add member (admin)
    """
    serializer_class = TeamMemberSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        qs = TeamMember.objects.all()
        if not (self.request.user and self.request.user.is_authenticated):
            qs = qs.filter(is_active=True)
        return qs


class TeamMemberDetailView(generics.RetrieveUpdateDestroyAPIView):
    """GET/PATCH/DELETE /api/team/members/<id>/"""
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class AchievementListCreateView(generics.ListCreateAPIView):
    """GET/POST /api/team/achievements/"""
    queryset = Achievement.objects.all()
    serializer_class = AchievementSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class AchievementDetailView(generics.RetrieveUpdateDestroyAPIView):
    """GET/PATCH/DELETE /api/team/achievements/<id>/"""
    queryset = Achievement.objects.all()
    serializer_class = AchievementSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
