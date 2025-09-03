from django.db import models

# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=200)
    description =models.TextField(blank=True)
    tech_stack=models.CharField(max_length =255,blank=True)
    github_link=models.URLField(blank=True,null=True)
    demo_link = models.URLField(blank=True, null=True)
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Certification(models.Model):
    title = models.CharField(max_length=200)
    provider = models.CharField(max_length=200)
    image = models.ImageField(upload_to="certifications/")  # certificate pic/logo
    link = models.URLField(blank=True, null=True)  # certificate verify link

    def __str__(self):
        return self.title