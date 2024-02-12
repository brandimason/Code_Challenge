# 🎿 Ski Days

An informational site that provides the resorts in North America with the weather for their location.

## Installation
1. You will need API keys in order to access the API information. To retrieve your own API Key, create an account with following links: (follow the instructions to retrieve your API keys)<br>
[OpenWeatherAPI](https://openweathermap.org/forecast5)<br>
[Ski Resorts and Conditions](https://rapidapi.com/random-shapes-random-shapes-default/api/ski-resorts-and-conditions)<br>
2. Fork and clone this repo from Github to your local environment.
3. Navigate into your local directory and open the contents in your preferred code editor.
4. Navigate into the server folder and run the command `pip install -r requirements.txt` to install the necessary packages needed to work on developing the package.
5. From the server folder, create a new folder named <i>hider</i> with a file named <i>passwords.py</i>. Create your api keys named <i>api_key_ski</i> and <i>api_key_weather</i>.
4. Run the command `flask run` to run the backend server. 
<b><u>Important Note:</u></b> The Ski Resort API is allowed 10 free requests per day. Once you have hit your limit, you can restart the server with the command `flask run --debug`
5. In a new terminal, navigate into the client folder and to the src folder. Run the command `npm start`.


## Features
🏂  View ski resorts in North America <br>
🎿 Click on the ski resort to see the weather for the day which includes: <br>
- The city name of the resort
- The temperature minimum
- Temperature maximum
- What it feels like
- The weather conditions for the day

![]('./client/video/skidays.gif')
<img src="./client/video/skidays.gif"/>

## Notes
🏂 What I would implement next:
- Add pagenation for ski resorts
- Add resort maps & how many lifts there are
- Add weather forecast for 5 days
- Add the closest airport to the resort
- Search bar to search for resort

## References
[Figma Outline](https://www.figma.com/file/vwcOVlNCcq5RmfRDXzSRuN/SnowDayz?type=whiteboard&node-id=0-1&t=ZQu3MTXyTWSBI5Yt-0)<br>
[OpenWeatherAPI](https://openweathermap.org/forecast5)<br>
[Ski Resorts and Conditions](https://rapidapi.com/random-shapes-random-shapes-default/api/ski-resorts-and-conditions)<br>
[Flask Documentation](https://flask.palletsprojects.com/en/3.0.x/installation/)<br>
[Python Request](https://pypi.org/project/requests/)<br>
[Flask CORS](https://flask-cors.readthedocs.io/en/latest/)<br>
[Python Built-In Types](https://docs.python.org/3/library/stdtypes.html#mapping-types-dict)<br>
[Create React App](https://create-react-app.dev/)<br>
[Modal Component](https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/)<br>
[Tailwind CSS](https://tailwindcomponents.com/cheatsheet/)<br>
[Requests Library Documentation](https://requests.readthedocs.io/en/latest/user/quickstart/)<br>
[NPM Spinner Doc](https://www.npmjs.com/package/react-loader-spinner)<br>
[Three Circles Spinner](https://mhnpd.github.io/react-loader-spinner/docs/components/three-circles)


## License
[MIT](https://choosealicense.com/licenses/mit/)
