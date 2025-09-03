from django.contrib import admin
from .models import Project
from .models import Certification

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'tech_stack', 'created_at')



@admin.register(Certification)
class CertificationAdmin(admin.ModelAdmin):
    list_display = ("title", "provider", "link")