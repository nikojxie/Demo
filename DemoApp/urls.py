from django.conf.urls import url, include
import DemoApp.views

urlpatterns = [
    url(r'add_book$', DemoApp.views.add_book, ),
    url(r'show_books$', DemoApp.views.show_books, ),
    url(r'del_book$', DemoApp.views.del_book, ),
    url(r'modify_book$', DemoApp.views.modify_book, ),
]