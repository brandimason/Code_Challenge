import React from "react";

const Modal = ({ weather, isOpen, onClose }) => {
	if (!isOpen) return null;

    const weatherInstance = weather.list[0]
    const weatherHigh = Math.floor(weatherInstance.main.temp_max)
    const weatherLow = Math.floor(weatherInstance.main.temp_min)
    const feelsLike = Math.floor(weatherInstance.main.feels_like)
    const weatherDescription = weatherInstance.weather[0].description

	return (
        <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center text-center"
            onClick={onClose}
        >
            <div
                className="bg-white h-96 w-96 mx-auto p-2 border-2 border-black rounded-10 shadow-md flex justify-center items-center"
            >
                <div>
                    Today's Weather Forecast for:<br></br>{weather.city.name}
                    <br></br>
                    Today's High: {weatherHigh},
                    <br></br>
                    Today's Low: {weatherLow},
                    <br></br>
                    Feels Like: {feelsLike},
                    <br></br>
                    Weather Conditions: {weatherDescription}
                </div>
			</div>
		</div>
	);
};

export default Modal;
