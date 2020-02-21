from django.db import models


# Create your models here.


class Project(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=255, blank=True, null=True)
    create_user = models.CharField(max_length=50)
    create_at = models.DateTimeField()

    def __str__(self):
        return self.name


STATUS_CHOICE = (
    ('1', 'Todo'),
    ('2', 'Doing'),
    ('3', 'Done'),
)


class Event(models.Model):
    title = models.TextField(blank=False, null=False)
    start = models.DateTimeField()
    end = models.DateTimeField()
    status = models.CharField(max_length=2, choices=STATUS_CHOICE)
    create_user = models.CharField(max_length=50)
    create_at = models.DateTimeField()
    project = models.ForeignKey(Project, on_delete=models.CASCADE)


TYPE_CHOICE = (
    ('1', 'Feature'),
    ('2', 'Fixed'),
    ('3', 'Done'),
)


class Advance(models.Model):
    type = models.CharField(max_length=2, choices=TYPE_CHOICE)
    content = models.TextField(blank=False, null=False)
    create_user = models.CharField(max_length=50)
    create_at = models.DateTimeField()


class Activity(models.Model):
    user = models.CharField(max_length=50)
    do = models.TextField(blank=False, null=False)
    time = models.DateTimeField()
