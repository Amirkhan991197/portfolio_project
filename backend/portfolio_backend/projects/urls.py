# portfolio_backend/portfolio/urls.py
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet
from django.urls import path, include
from .views import CertificationViewSet
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register(r'projects', ProjectViewSet, basename='projects')
router.register(r'certifications', CertificationViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path("api/", include(router.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
