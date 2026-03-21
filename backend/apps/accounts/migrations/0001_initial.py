from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='AdminUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('name', models.CharField(max_length=150)),
                ('role', models.CharField(
                    choices=[
                        ('superadmin', 'Super Admin'),
                        ('admin', 'Admin'),
                        ('gallery_lead', 'Gallery & Admin Lead'),
                        ('event_manager', 'Event Manager'),
                        ('viewer', 'Viewer'),
                    ],
                    default='viewer',
                    max_length=50,
                )),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now)),
                ('groups', models.ManyToManyField(
                    blank=True,
                    related_name='accounts_adminuser_set',
                    to='auth.group',
                    verbose_name='groups',
                )),
                ('user_permissions', models.ManyToManyField(
                    blank=True,
                    related_name='accounts_adminuser_set',
                    to='auth.permission',
                    verbose_name='user permissions',
                )),
            ],
            options={
                'verbose_name': 'Admin User',
                'verbose_name_plural': 'Admin Users',
            },
        ),
    ]
