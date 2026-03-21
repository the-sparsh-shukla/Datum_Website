from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import AdminUser


class AdminUserSerializer(serializers.ModelSerializer):
    permissions = serializers.ReadOnlyField()

    class Meta:
        model = AdminUser
        fields = ['id', 'email', 'name', 'role', 'permissions', 'date_joined']
        read_only_fields = ['id', 'date_joined', 'permissions']


class AdminUserCreateSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)

    class Meta:
        model = AdminUser
        fields = ['email', 'name', 'role', 'password']

    def create(self, validated_data):
        return AdminUser.objects.create_user(**validated_data)


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        user = self.user
        data['user'] = AdminUserSerializer(user).data
        return data
