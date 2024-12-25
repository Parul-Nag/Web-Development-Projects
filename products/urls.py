from django.urls import path
from . import views

urlpatterns = [
    path('api/products/',views.ProductListView.as_view(),name='product-list'),
]
