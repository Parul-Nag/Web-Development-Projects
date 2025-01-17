from django.db import models

# Create your models here.
class Product(models.Model):
    title=models.CharField(max_length=255)
    price=models.FloatField()
    description=models.TextField()
    category=models.CharField(max_length=100)
    image=models.URLField()
    sold=models.BooleanField(default=False)
    is_sale=models.BooleanField(default=False)
    
    def __str__(self):
        return self.title