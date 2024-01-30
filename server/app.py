from flask import Flask
from api import get_ski_resort, get_weather
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")

def display_data():
    resorts = get_ski_resort(app.debug)
    for resort in resorts['data']:
        resort["weather"] = get_weather(resort['location']['latitude'], resort['location']['longitude'])
        
    return {
        "resorts" : resorts
        }