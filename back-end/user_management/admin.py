from django.contrib import admin

from user_management.models import Profile


# Register your models here.
class ProfileAdmin(admin.ModelAdmin):
    list_display = ["first_name", "last_name", "phone_no", "address"]

    def first_name(self, object):
        return object.user.first_name

    def last_name(self, object):
        return object.user.last_name


admin.site.register(Profile, ProfileAdmin)
