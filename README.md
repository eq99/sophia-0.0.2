# sophia-0.0.2


# Next.js

```sh
npx create-next-app --example with-tailwindcss with-tailwindcss-app
```


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
