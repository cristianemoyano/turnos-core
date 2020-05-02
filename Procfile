release: python ./server/manage.py migrate
web: cd server && gunicorn core.wsgi --log-file -