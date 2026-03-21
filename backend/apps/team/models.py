from django.db import models


class TeamMember(models.Model):
    name = models.CharField(max_length=150)
    role = models.CharField(max_length=150)
    photo_url = models.URLField(max_length=500, blank=True)
    photo = models.ImageField(upload_to='team/', null=True, blank=True)
    linkedin = models.URLField(max_length=500, blank=True)
    github = models.URLField(max_length=500, blank=True)
    bio = models.TextField(blank=True)
    skills = models.JSONField(default=list, blank=True)
    order = models.PositiveIntegerField(default=0, help_text='Display order (lower = first)')
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order', 'name']
        verbose_name = 'Team Member'
        verbose_name_plural = 'Team Members'

    def __str__(self):
        return f'{self.name} — {self.role}'


class Achievement(models.Model):
    year = models.CharField(max_length=10)
    title = models.CharField(max_length=255)
    description = models.TextField()
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['-year', 'order']
        verbose_name = 'Achievement'
        verbose_name_plural = 'Achievements'

    def __str__(self):
        return f'{self.year}: {self.title}'
