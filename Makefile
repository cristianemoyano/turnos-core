freeze:
	pipenv run pip freeze > requirements.txt

run:
	yarn build && python manage.py runserver

migrate:
	python manage.py migrate

deploy:
	git push heroku master