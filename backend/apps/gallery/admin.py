from django.contrib import admin
from .models import GalleryImage


@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'uploaded_by', 'is_featured', 'upload_date']
    list_filter = ['category', 'is_featured']
    search_fields = ['title', 'description', 'tags']
    list_editable = ['is_featured']
    ordering = ['-created_at']
    readonly_fields = ['upload_date', 'created_at']
