from django.db import models
from django.urls import reverse # Used to generate URLs by reversing the URL patterns
import uuid # Required for unique book instances
# Create your models here.

class Genre(models.Model):
    #Model representing a book genre."""
	name = models.CharField(max_length=200)
	summary = models.TextField(max_length=1000)

	class Meta:
		ordering = ['name']

	def get_absolute_url(self):
		return reverse('genre-detail', args=[str(self.id)])

	def __str__(self):
		"""String for representing the Model object."""
		return self.name


class Movie(models.Model):
    
	id = models.UUIDField(primary_key=True, default=uuid.uuid4)
	title = models.CharField(max_length=200)
	director= models.TextField(max_length=200)
	summary = models.TextField(max_length=1000, help_text='Descripción de la pelicula')
	genre = models.ForeignKey('Genre', on_delete=models.SET_NULL, null=True, blank=False)
	image = models.ImageField(upload_to='imgs/', null=True, blank=True)
    
	def __str__(self):
		return self.title
    
	def get_absolute_url(self):
		"""Returns the url to access a detail record for this book."""
		return reverse('game-detail', args=[str(self.id)])