from django.urls import path
from .views import GalleryListCreateView, GalleryDetailView, GalleryCategoryListView, GalleryStatsView

urlpatterns = [
    path('', GalleryListCreateView.as_view(), name='gallery-list-create'),
    path('<int:pk>/', GalleryDetailView.as_view(), name='gallery-detail'),
    path('categories/', GalleryCategoryListView.as_view(), name='gallery-categories'),
    path('stats/', GalleryStatsView.as_view(), name='gallery-stats'),
]
