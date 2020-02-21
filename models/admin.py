from django.contrib import admin

# Register your models here.
from .models import Project, Event, Advance, Activity


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'create_user', 'create_at')
    list_filter = ('name', 'create_user', 'create_at')
    list_per_page = 50
    date_hierarchy = 'create_at'
    ordering = ('create_at',)


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'start', 'end', 'status','project', 'create_at')
    list_filter = ('start', 'end', 'status', 'create_at')
    list_per_page = 50
    date_hierarchy = 'create_at'
    ordering = ('create_at',)


@admin.register(Advance)
class AdvanceAdmin(admin.ModelAdmin):
    list_display = ('id', 'type', 'content', 'create_user', 'create_at')
    list_filter = ('type', 'create_user', 'create_at')
    list_per_page = 50
    date_hierarchy = 'create_at'
    ordering = ('create_at',)


@admin.register(Activity)
class ActivityAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'do', 'time')
    list_filter = ('user', 'time')
    list_per_page = 50
    date_hierarchy = 'time'
    ordering = ('time',)
