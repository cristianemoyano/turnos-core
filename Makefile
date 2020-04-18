freeze:
	pipenv run pip freeze > requirements.txt

run:
	python manage.py runserver

makemigrations:
	python manage.py makemigrations

build:
	yarn build

coverage:
	coverage run --source='.' manage.py test && coverage report

migrate:
	python manage.py migrate

deploy:
	git push heroku master