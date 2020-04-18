freeze:
	pipenv run pip freeze > requirements.txt

run:
	python manage.py runserver

build:
	yarn build

migrate:
	python manage.py migrate

deploy:
	git push heroku master