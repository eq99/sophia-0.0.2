from os import  environ, path
from dotenv import load_dotenv

basedir = path.abspath(path.dirname(__file__))
load_dotenv(path.join(basedir, '.env'))

class Base:
    # Flask
    SECRET_KEY = environ.get('SECRET_KEY')
    DEBUG = False
    TESTING = False

    # database
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = environ.get('DATABASE_URI')
    SQLALCHEMY_ECHO = False

    # cache
    CACHE_TYPE = 'simple'
    CACHE_DEFAULT_TIMEOUT = 300
  
class Dev(Base):
    DEBUG = True
    TESTING = True
    SQLALCHEMY_ECHO = True