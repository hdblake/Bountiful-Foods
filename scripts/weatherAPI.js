// Create elements for weather card
let currentForecast = document.createElement("div");
let currentTemp = document.createElement("p");
let conditions = document.createElement("p");
let humidity = document.createElement("p");
let forecast = document.createElement("div");
let forecastH4 = document.createElement("h4");
let dayOneHigh = document.createElement("p");
let dayTwoHigh = document.createElement("p");
let dayThreeHigh = document.createElement("p");
let card = document.querySelector(".weather-card");
let display = document.querySelector(".weather");

const URL =
	"https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&cnt=4&appid=97ce60e6d0bc0ca722b497935512500d&units=imperial";

async function fetchAPI() {
	try {
		const response = await fetch(URL);
		if (response.ok) {
			const data = await response.json();
			displayWeather(data);
		} else {
			throw Error(await response.text());
		}
	} catch (error) {
		console.log(error);
	}
}

fetchAPI();

// Pull parsed JSON data, store into created elements, and append to parent
function displayWeather(weatherData) {
	currentTemp.innerHTML = `Current Temp: ${weatherData.list[0].main.temp.toFixed(0)}°F`;
	currentForecast.appendChild(currentTemp);

	let currentCondition = weatherData.list[0].weather[0].description;
	currentCondition = currentCondition.toLowerCase().split(" ")
	.map((a) => a.charAt(0).toUpperCase() + a.substring(1)).join(" ");

	conditions.innerHTML = `${currentCondition}`;
	currentForecast.appendChild(conditions);

	humidity.innerHTML = `Humidity: ${weatherData.list[0].main.humidity}%`;
	currentForecast.appendChild(humidity);
	card.appendChild(currentForecast);

	// Capitalize the first letter of each word for the condition description
	let dayOneCondition = weatherData.list[1].weather[0].description;
	dayOneCondition = dayOneCondition.toLowerCase().split(" ")
	.map((a) => a.charAt(0).toUpperCase() + a.substring(1)).join(" ");

	let dayTwoCondition = weatherData.list[2].weather[0].description;
	dayTwoCondition = dayTwoCondition.toLowerCase().split(" ")
	.map((a) => a.charAt(0).toUpperCase() + a.substring(1)).join(" ");

	let dayThreeCondition = weatherData.list[3].weather[0].description;
	dayThreeCondition = dayThreeCondition.toLowerCase().split(" ")
	.map((a) => a.charAt(0).toUpperCase() + a.substring(1)).join(" ");

	forecastH4.innerHTML = `Three Day Forcast`;
	forecast.appendChild(forecastH4);

	dayOneHigh.innerHTML = `Day 1 High: <br>${weatherData.list[1].main.temp_max.toFixed(0)}°F <br>${dayOneCondition}`;
	dayTwoHigh.innerHTML = `Day 2 High: <br>${weatherData.list[2].main.temp_max.toFixed(0)}°F <br>${dayTwoCondition}`;
	dayThreeHigh.innerHTML = `Day 3 High: <br>${weatherData.list[3].main.temp_max.toFixed(0)}°F <br>${dayThreeCondition}`;
	forecast.appendChild(dayOneHigh);
	forecast.appendChild(dayTwoHigh);
	forecast.appendChild(dayThreeHigh);
	card.appendChild(forecast);

	display.appendChild(card);
}