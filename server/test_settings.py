from server.settings import *

SOUTH_TESTS_MIGRATE = False
DATABASES['default'] = {
    'ENGINE': 'django.db.backends.sqlite3',
    'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
}
