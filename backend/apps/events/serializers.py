from rest_framework import serializers
from .models import Event


class EventSerializer(serializers.ModelSerializer):
    formatted_date = serializers.ReadOnlyField()
    image_source = serializers.SerializerMethodField()

    class Meta:
        model = Event
        fields = [
            'id', 'title', 'date', 'formatted_date', 'category',
            'description', 'image_url', 'image', 'image_source',
            'location', 'is_published', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at', 'formatted_date', 'image_source']

    def get_image_source(self, obj):
        """Return the best available image URL."""
        if obj.image:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.image.url)
            return obj.image.url
        return obj.image_url or None


class EventCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = [
            'title', 'date', 'category', 'description',
            'image_url', 'image', 'location', 'is_published'
        ]
