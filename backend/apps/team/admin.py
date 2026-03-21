from django.contrib import admin
from .models import TeamMember, Achievement


@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ['name', 'role', 'order', 'is_active']
    list_filter = ['is_active']
    search_fields = ['name', 'role', 'bio']
    list_editable = ['order', 'is_active']
    ordering = ['order', 'name']


@admin.register(Achievement)
class AchievementAdmin(admin.ModelAdmin):
    list_display = ['year', 'title', 'order']
    ordering = ['-year', 'order']
    list_editable = ['order']
