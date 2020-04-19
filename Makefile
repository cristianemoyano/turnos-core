freeze:
	pipenv run pip freeze > requirements.txt

server:
	python manage.py runserver

front:
	yarn start

makemigrations:
	python manage.py makemigrations

compile:
	yarn build

coverage:
	coverage run --source='.' manage.py test && coverage report

migrate:
	python manage.py migrate

deploy:
	git push heroku master