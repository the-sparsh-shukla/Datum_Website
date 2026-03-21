from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='GalleryImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.URLField(blank=True, help_text='External image URL', max_length=500)),
                ('image', models.ImageField(blank=True, help_text='Uploaded image file', null=True, upload_to='gallery/')),
                ('title', models.CharField(max_length=255)),
                ('category', models.CharField(max_length=100)),
                ('description', models.TextField(blank=True)),
                ('upload_date', models.DateField(auto_now_add=True)),
                ('tags', models.JSONField(blank=True, default=list)),
                ('is_featured', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('uploaded_by', models.ForeignKey(
                    null=True,
                    on_delete=django.db.models.deletion.SET_NULL,
                    related_name='gallery_uploads',
                    to='accounts.adminuser',
                )),
            ],
            options={
                'verbose_name': 'Gallery Image',
                'verbose_name_plural': 'Gallery Images',
                'ordering': ['-created_at'],
            },
        ),
    ]
