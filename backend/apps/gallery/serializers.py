from rest_framework import serializers
from .models import GalleryImage
from apps.accounts.serializers import AdminUserSerializer


class GalleryImageSerializer(serializers.ModelSerializer):
    uploaded_by_name = serializers.SerializerMethodField()
    image_source = serializers.SerializerMethodField()

    class Meta:
        model = GalleryImage
        fields = [
            'id', 'url', 'image', 'image_source', 'title', 'category',
            'description', 'upload_date', 'tags', 'uploaded_by',
            'uploaded_by_name', 'is_featured', 'created_at'
        ]
        read_only_fields = ['id', 'upload_date', 'created_at', 'uploaded_by', 'image_source', 'uploaded_by_name']

    def get_uploaded_by_name(self, obj):
        if obj.uploaded_by:
            return obj.uploaded_by.name
        return 'Admin'

    def get_image_source(self, obj):
        request = self.context.get('request')
        if obj.image:
            if request:
                return request.build_absolute_uri(obj.image.url)
            return obj.image.url
        return obj.url or None

    def create(self, validated_data):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            validated_data['uploaded_by'] = request.user
        return super().create(validated_data)
