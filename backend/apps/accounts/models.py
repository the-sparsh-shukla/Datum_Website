from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils.timezone import now as timezone_now


class AdminUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Email is required')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('role', 'superadmin')
        return self.create_user(email, password, **extra_fields)


class AdminUser(AbstractBaseUser, PermissionsMixin):
    ROLE_CHOICES = [
        ('superadmin', 'Super Admin'),
        ('admin', 'Admin'),
        ('gallery_lead', 'Gallery & Admin Lead'),
        ('event_manager', 'Event Manager'),
        ('viewer', 'Viewer'),
    ]

    email = models.EmailField(unique=True)
    name = models.CharField(max_length=150)
    role = models.CharField(max_length=50, choices=ROLE_CHOICES, default='viewer')

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=timezone_now)

    objects = AdminUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    class Meta:
        verbose_name = 'Admin User'
        verbose_name_plural = 'Admin Users'

    def __str__(self):
        return f'{self.name} ({self.email})'

    @property
    def permissions(self):
        """Return permission list based on role."""
        role_permissions = {
            'superadmin': [
                'events:create', 'events:edit', 'events:delete',
                'gallery:manage', 'users:view', 'users:manage',
                'team:manage'
            ],
            'admin': [
                'events:create', 'events:edit', 'events:delete',
                'gallery:manage', 'users:view', 'team:manage'
            ],
            'gallery_lead': [
                'events:create', 'events:edit', 'events:delete',
                'gallery:manage', 'users:view'
            ],
            'event_manager': ['events:create', 'events:edit', 'events:delete'],
            'viewer': [],
        }
        return role_permissions.get(self.role, [])

    def has_permission(self, perm):
        return perm in self.permissions
