# from urllib import request
from flask import Flask, jsonify, request, render_template, redirect, url_for
import json
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os

app = Flask(__name__, template_folder=os.path.abspath('templates'))


CORS(app)

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
db = SQLAlchemy(app)


# User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)


# Initialize the database
with app.app_context():
    db.create_all()


# Root route
@app.route('/')
def index():
    return redirect(url_for('register'))


# Register route
@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form.get('username').strip()
        password = request.form.get('password')
        confirm_password = request.form.get('confirm_password')

        if password != confirm_password:
            return redirect(url_for('register'))

        if not username:
            return redirect(url_for('register'))

        existing_user = User.query.filter_by(username=username).first()
        if existing_user:
            return redirect(url_for('register'))

        user = User(username=username, password=password)
        db.session.add(user)
        db.session.commit()

        return redirect("http://127.0.0.1:5011/register")

    return render_template('register.html')



# Login route
@app.route('/login', methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')

    # Check if user exists
    user = User.query.filter_by(username=username).first()

    if user and user.password == password:
        # Successful login, redirect to the desired page
        return redirect("http://localhost:5173")
    else:
        # Invalid login attempt
        return render_template('register.html')


# API route for data
# @app.route('/api/data', methods=['GET'])
# def get_data():
with open('data.json', 'r') as file:
    data = json.load(file)

def is_movie(content):
    return not content.get('series_id')

def is_series(content):
    return bool(content.get('series_id'))

@app.route('/api/data', methods=['GET'])
def get_filtered_content():
    search = request.args.get('search')
    content_type = request.args.get('type')
    max_results = request.args.get('max', default=100, type=int)

    filtered_data = data

    if search:
        filtered_data = [item for item in filtered_data if search.lower() in item['name'].lower()]

    if content_type:
        if content_type.lower() == 'movie':
            filtered_data = [item for item in filtered_data if is_movie(item)]
        elif content_type.lower() == 'series':
            filtered_data = [item for item in filtered_data if is_series(item)]
        else:
            return jsonify({"error": "Invalid type parameter. Use 'movie' or 'series'."}), 400

    filtered_data = filtered_data[:max_results]

    return jsonify(filtered_data)

if __name__ == "__main__":
    app.run(port=5011, debug=True)