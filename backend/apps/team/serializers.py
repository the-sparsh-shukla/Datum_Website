from rest_framework import serializers
from .models import TeamMember, Achievement


class TeamMemberSerializer(serializers.ModelSerializer):
    photo_source = serializers.SerializerMethodField()

    class Meta:
        model = TeamMember
        fields = [
            'id', 'name', 'role', 'photo_url', 'photo', 'photo_source',
            'linkedin', 'github', 'bio', 'skills', 'order', 'is_active', 'created_at'
        ]
        read_only_fields = ['id', 'created_at', 'photo_source']

    def get_photo_source(self, obj):
        request = self.context.get('request')
        if obj.photo:
            if request:
                return request.build_absolute_uri(obj.photo.url)
            return obj.photo.url
        return obj.photo_url or None


class AchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievement
        fields = ['id', 'year', 'title', 'description', 'order']
        read_only_fields = ['id']
