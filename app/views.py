from flask import Blueprint
from flask_restful import Resource
from flask_restful import Api

api = Api()

class Home(Resource):

    def get(self):
        return {"hello":"world"}
    
api.add_resource(Home, '/')

class User(Resource):

    def get(self, user_id):
        return {'hi': user_id}

api.add_resource(User, '/user', '/user/<user_id>')

class Login(Resource):
    def get(self):
        return {'login':'hi'}

api.add_resource(Login, '/login')