from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('apps.accounts.urls')),
    path('api/events/', include('apps.events.urls')),
    path('api/gallery/', include('apps.gallery.urls')),
    path('api/team/', include('apps.team.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
