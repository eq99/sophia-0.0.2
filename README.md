# sophia-0.0.2


# Poetry

```sh
poetry run gunicorn "app:create_app()" --reload
```

# alembic

`alembic.ini`:
sqlalchemy.url = xxx

`migrations/env.py`:

```python
from app.config import DB_DSN
from app import db, load_modules

load_modules()
config.set_main_option("sqlalchemy.url", str(DB_DSN))
target_metadata = db
```