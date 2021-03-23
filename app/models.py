from flask_sqlalchemy import SQLAlchemy
from flask_sqlalchemy import Model
from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Float
from sqlalchemy import DateTime


db: SQLAlchemy = SQLAlchemy()


class User(Model):
    id = Column(Integer, primary_key=True)
    nickname = Column(String(32), index=True, unique=True, nullable=False)
    email = Column(String(64), index=True, unique=True)
    password_hash = Column(String, index=True, nullable=False)
    avatar_url = Column(String)
    reputation = Column(Float, default=0.0)
    school = Column(String)
    status = Column(Integer, default=0) # see constants.py for more details 
    created_time = Column(DateTime)

