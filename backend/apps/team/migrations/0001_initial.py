from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name='TeamMember',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
                ('role', models.CharField(max_length=150)),
                ('photo_url', models.URLField(blank=True, max_length=500)),
                ('photo', models.ImageField(blank=True, null=True, upload_to='team/')),
                ('linkedin', models.URLField(blank=True, max_length=500)),
                ('github', models.URLField(blank=True, max_length=500)),
                ('bio', models.TextField(blank=True)),
                ('skills', models.JSONField(blank=True, default=list)),
                ('order', models.PositiveIntegerField(default=0, help_text='Display order (lower = first)')),
                ('is_active', models.BooleanField(default=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name': 'Team Member',
                'verbose_name_plural': 'Team Members',
                'ordering': ['order', 'name'],
            },
        ),
        migrations.CreateModel(
            name='Achievement',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.CharField(max_length=10)),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('order', models.PositiveIntegerField(default=0)),
            ],
            options={
                'verbose_name': 'Achievement',
                'verbose_name_plural': 'Achievements',
                'ordering': ['-year', 'order'],
            },
        ),
    ]
