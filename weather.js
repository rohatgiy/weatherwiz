function fetchData(cityName, countryCode) {
    var key = "22c39f013e291a03e97c52baf7b4905e";
    fetch("http://api.openweathermap.org/data/2.5/weather?" + "q=" + cityName + "," + countryCode + "&APPID="+ key + "&units=metric").then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      displayWeather(data);
    })
    .catch(function() {

    });

}

function submitForm() {
    var city = document.getElementById("form1").elements[0].value;
    var country = document.getElementById("form1").elements[1].value;

    fetchData(city, country);
}

function displayWeather(d) {
    if (d.cod != 404) {
        document.getElementById('location').innerHTML = "location: " + d.name + ", " + d.sys.country;
        document.getElementById('temp').innerHTML = "temp: " + Math.round(d.main.temp) + '&deg;C';
        document.getElementById('humidity').innerHTML = "humidity: " + d.main.humidity + "%";
        document.getElementById('windspeed').innerHTML = "wind speed: " + Math.round((d.wind.speed)*3.6) + " km/h";
    } else {
        document.getElementById('location').innerHTML = "city not found :(";
        document.getElementById('temp').innerHTML = "";
        document.getElementById('humidity').innerHTML = "";
        document.getElementById('windspeed').innerHTML = "";
    }
    
}