import requests
import json
from hider.passwords import api_key_ski, api_key_weather

def get_ski_resort(debug=False):
    if debug:
        file_description = open("resorts.json")
        data = json.load(file_description)
        return data

    url = "https://ski-resorts-and-conditions.p.rapidapi.com/v1/resort"

    headers = {
        "X-RapidAPI-Key": api_key_ski,
        "X-RapidAPI-Host": "ski-resorts-and-conditions.p.rapidapi.com"
    }

    response = requests.get(url, headers=headers)

    return response.json()

def get_weather(latitude, longitude):
    url = f"https://api.openweathermap.org/data/2.5/forecast?lat={latitude}&lon={longitude}&appid={api_key_weather}&units=imperial"

    response = requests.get(url)
    
    return response.json()