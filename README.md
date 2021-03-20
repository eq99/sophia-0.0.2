# sophia-0.0.2


# Poetry

```sh
poetry run gunicorn "app:create_app()" --reload
```


# database

```sh
poetry add Flask-SQLAlchemy Flask-Migrate
poetry run flask db init
poetry run flask db migrate
poetry run flask db upgrade
poetry run flask db --help
```
