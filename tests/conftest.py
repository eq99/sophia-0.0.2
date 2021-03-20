# This is not a test file
# but the config file for pytest


import pytest
from app import create_app



@pytest.fixture
def app():
    app = create_app()
    # app.config.from_object('app.config.Test')
    with app.app_context():   
        # db.create_all()
        pass
    return app