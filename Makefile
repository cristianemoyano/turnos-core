freeze:
	pipenv run pip freeze > requirements.txt

run:
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

monitor:
	docker-compose -f docker-compose.monitoring.yml up

monitor-stop:
	docker-compose -f docker-compose.monitoring.yml stop

monitor-ps:
	docker-compose -f docker-compose.monitoring.yml ps

release:
	git checkout master
	git pull origin master
	invoke release