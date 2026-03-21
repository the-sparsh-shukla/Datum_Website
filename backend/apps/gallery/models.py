from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.conf import settings


class GalleryImage(models.Model):
    url = models.URLField(max_length=500, blank=True, help_text='External image URL')
    image = models.ImageField(upload_to='gallery/', null=True, blank=True, help_text='Uploaded image file')
    title = models.CharField(max_length=255)
    category = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    upload_date = models.DateField(auto_now_add=True)
    tags = models.JSONField(default=list, blank=True)
    uploaded_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        related_name='gallery_uploads',
    )
    is_featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Gallery Image'
        verbose_name_plural = 'Gallery Images'

    def __str__(self):
        return f'{self.title} [{self.category}]'

    @property
    def image_source(self):
        if self.image:
            return self.image.url
        return self.url
