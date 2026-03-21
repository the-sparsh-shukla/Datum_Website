from django.db import models
from django.utils import timezone


class Event(models.Model):
    CATEGORY_CHOICES = [
        ('Workshop', 'Workshop'),
        ('Project', 'Project'),
        ('Networking', 'Networking'),
        ('Competition', 'Competition'),
    ]

    title = models.CharField(max_length=255)
    date = models.DateTimeField()
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    description = models.TextField()
    image_url = models.URLField(max_length=500, blank=True)
    image = models.ImageField(upload_to='events/', null=True, blank=True)
    location = models.CharField(max_length=255, blank=True)
    is_published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-date']
        verbose_name = 'Event'
        verbose_name_plural = 'Events'

    def __str__(self):
        return f'{self.title} ({self.category})'

    @property
    def formatted_date(self):
        return self.date.strftime('%B %d, %Y • %I:%M %p')
