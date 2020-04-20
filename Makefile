freeze:
	pipenv run pip freeze > requirements.txt

dev:
	python manage.py runserver

front:
	yarn start

migrations:
	python manage.py makemigrations

compile:
	yarn build

coverage:
	coverage run --source='.' manage.py test && coverage report

migrate:
	python manage.py migrate

deploy:
	git push heroku master

test:
	coverage run manage.py test --settings=server.test_settings -v 2 
