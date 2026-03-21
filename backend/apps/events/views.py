from rest_framework import generics, filters, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from django.db.models import Count

from .models import Event
from .serializers import EventSerializer, EventCreateSerializer


class EventListCreateView(generics.ListCreateAPIView):
    """
    GET  /api/events/        — list all published events (public)
    POST /api/events/        — create a new event (admin only)
    """
    queryset = Event.objects.filter(is_published=True)
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'description', 'category']
    ordering_fields = ['date', 'created_at', 'title']
    ordering = ['-date']
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return EventCreateSerializer
        return EventSerializer

    def get_queryset(self):
        qs = Event.objects.all()
        # Non-admin users only see published events
        if not (self.request.user and self.request.user.is_authenticated):
            qs = qs.filter(is_published=True)

        category = self.request.query_params.get('category')
        if category:
            qs = qs.filter(category=category)

        return qs


class EventDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    GET    /api/events/<id>/  — retrieve event
    PATCH  /api/events/<id>/  — update event (admin)
    DELETE /api/events/<id>/  — delete event (admin)
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class EventCategoryListView(APIView):
    """GET /api/events/categories/ — list available categories with counts."""
    def get(self, request):
        data = (
            Event.objects
            .filter(is_published=True)
            .values('category')
            .annotate(count=Count('id'))
            .order_by('category')
        )
        return Response(list(data))


class EventStatsView(APIView):
    """GET /api/events/stats/ — admin stats for dashboard."""
    permission_classes = [IsAuthenticated]

    def get(self, request):
        total = Event.objects.count()
        published = Event.objects.filter(is_published=True).count()
        by_category = list(
            Event.objects
            .values('category')
            .annotate(count=Count('id'))
            .order_by('category')
        )
        return Response({
            'total': total,
            'published': published,
            'draft': total - published,
            'by_category': by_category,
        })
