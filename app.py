# from urllib import request
from flask import Flask, jsonify, request, render_template, redirect, url_for
import json
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
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
    return 'Hello'


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

        flash("Registration successful! Please log in.", "success")
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
        return "Invalid credentials", 401


# API route for data
@app.route('/api/data', methods=['GET'])
def get_data():
    with open('data.json', 'r') as file:
        data = json.load(file)
    return jsonify(data)


# Run the app
if __name__ == "__main__":
    app.run(port=5011, debug=True)
