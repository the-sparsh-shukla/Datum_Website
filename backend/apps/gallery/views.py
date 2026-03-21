from rest_framework import generics, filters, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from django.db.models import Count, Q

from .models import GalleryImage
from .serializers import GalleryImageSerializer


class GalleryListCreateView(generics.ListCreateAPIView):
    """
    GET  /api/gallery/   — list all gallery images (public)
    POST /api/gallery/   — upload a new image (admin only)
    """
    queryset = GalleryImage.objects.all()
    serializer_class = GalleryImageSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'tags', 'category', 'description']
    ordering_fields = ['created_at', 'title', 'upload_date']
    ordering = ['-created_at']
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        qs = GalleryImage.objects.all()

        category = self.request.query_params.get('category')
        if category:
            qs = qs.filter(category__iexact=category)

        featured = self.request.query_params.get('featured')
        if featured == 'true':
            qs = qs.filter(is_featured=True)

        return qs


class GalleryDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    GET    /api/gallery/<id>/  — retrieve image
    PATCH  /api/gallery/<id>/  — update image (admin)
    DELETE /api/gallery/<id>/  — delete image (admin)
    """
    queryset = GalleryImage.objects.all()
    serializer_class = GalleryImageSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class GalleryCategoryListView(APIView):
    """GET /api/gallery/categories/ — list categories with counts."""
    def get(self, request):
        data = (
            GalleryImage.objects
            .values('category')
            .annotate(count=Count('id'))
            .order_by('category')
        )
        return Response(list(data))


class GalleryStatsView(APIView):
    """GET /api/gallery/stats/ — admin gallery stats."""
    permission_classes = [IsAuthenticated]

    def get(self, request):
        total = GalleryImage.objects.count()
        featured = GalleryImage.objects.filter(is_featured=True).count()
        by_category = list(
            GalleryImage.objects
            .values('category')
            .annotate(count=Count('id'))
            .order_by('category')
        )
        return Response({
            'total': total,
            'featured': featured,
            'by_category': by_category,
        })
