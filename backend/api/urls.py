from django.urls import path
from .views import StudentsView, CheckinView

urlpatterns = [
    path('students', StudentsView.as_view(), name='students'),
    path('checkin', CheckinView.as_view(), name='checkin'),
    path('checkins', CheckinView.as_view(), name='checkins'),
]