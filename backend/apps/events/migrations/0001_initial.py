from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('date', models.DateTimeField()),
                ('category', models.CharField(
                    choices=[
                        ('Workshop', 'Workshop'),
                        ('Project', 'Project'),
                        ('Networking', 'Networking'),
                        ('Competition', 'Competition'),
                    ],
                    max_length=50,
                )),
                ('description', models.TextField()),
                ('image_url', models.URLField(blank=True, max_length=500)),
                ('image', models.ImageField(blank=True, null=True, upload_to='events/')),
                ('location', models.CharField(blank=True, max_length=255)),
                ('is_published', models.BooleanField(default=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'Event',
                'verbose_name_plural': 'Events',
                'ordering': ['-date'],
            },
        ),
    ]
