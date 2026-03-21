from django.urls import path
from .views import EventListCreateView, EventDetailView, EventCategoryListView, EventStatsView

urlpatterns = [
    path('', EventListCreateView.as_view(), name='event-list-create'),
    path('<int:pk>/', EventDetailView.as_view(), name='event-detail'),
    path('categories/', EventCategoryListView.as_view(), name='event-categories'),
    path('stats/', EventStatsView.as_view(), name='event-stats'),
]
