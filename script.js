const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dc1fb7f432msh2eb095d188d982bp14c7f7jsn290ef9077be0',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityName.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			cloud_pct.innerHTML = response.cloud_pct
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
			temp.innerHTML = response.temp
			wind_degrees.innerHTML = response.wind_degrees
			wind_speed.innerHTML = response.wind_speed
		})
		.catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
	e.preventDefault();
	var weather = document.getElementById("city").value;
	getWeather(weather);
}
)


getWeather("Indore");