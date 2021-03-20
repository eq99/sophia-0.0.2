import logging
from os import environ
from flask import Flask
from flask_migrate import Migrate
from app.views import api
from app.models import db

logger = logging.getLogger(__name__)

def create_app():
    app = Flask(__name__)
    if environ.get('flask_env') == 'development':
        app.config.from_object('app.config.Dev')
    else:
        app.config.from_object('app.config.Base')

    api.init_app(app)
    db.init_app(app)
    migrate = Migrate(app, db)
    return app
