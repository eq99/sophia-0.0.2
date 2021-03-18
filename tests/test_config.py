from os import environ

def test_development_config(app):
    app.config.from_object('app.config.Dev')
    assert app.config['DEBUG']
    assert app.config['TESTING']
    # if environ.get('FLASK_ENV') == 'development':
    #     assert 'dev' in app.config['SQLALCHEMY_DATABASE_URI']


def test_base_config(app):
    app.config.from_object('app.config.Base')
    assert not app.config['DEBUG']
    assert not app.config['TESTING']
    assert 'sql' in app.config['SQLALCHEMY_DATABASE_URI']
