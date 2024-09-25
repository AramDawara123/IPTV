from flask import Flask, jsonify
import json

app = Flask(__name__)

@app.route('/')
def index():
    return 'hallo'
@app.route('/api/data', methods=['GET'])
def get_data():
    with open('data.json', 'r') as file:
        data = json.load(file)
    return jsonify(data)

if __name__ == "__main__":
    app.run(port=5011, debug=True)