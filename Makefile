freeze:
	pipenv run pip freeze > requirements.txt

run:
	python ./server/manage.py runserver

front:
	cd client && yarn start

migrations:
	python ./server/manage.py makemigrations

compile:
	cd client && yarn build

coverage:
	cd server && coverage run --source='.' manage.py test && coverage report

migrate:
	python ./server/manage.py migrate

deploy:
	git push heroku master

test:
	cd server && coverage run manage.py test --settings=core.test_settings -v 2 

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