const InputSection = document.querySelector(".search input");
const searchbar = document.querySelector(".search button");

const Cityname = document.querySelector(".city");
const temp = document.querySelector(".temp");
const Humidity = document.querySelector(".humidity");
const Wind = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather-icon");

async function getdata(city) {
    const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=ffd45748e1154eda85d72155242410&q=${city}&aqi=yes`);
    return await data.json();
}

searchbar.addEventListener("click", async () => {
    const val = InputSection.value;
    const result = await getdata(val);

    // Update the DOM with fetched data
    Cityname.innerText = result.location.name;
    temp.innerText = Math.round(result.current.temp_c) + "°C";
    Humidity.innerText = result.current.humidity + "%";
    Wind.innerText = Math.round(result.current.wind_kph) + " km/h";

    // Set the weather icon based on condition
    const condition = result.current.condition.text.toLowerCase(); // Get the condition text
    if (condition.includes("cloudy")) {
        weatherIcon.src = "images/clouds.png";
    } else if (condition.includes("clear")) {
        weatherIcon.src = "images/clear.png";
    } else if (condition.includes("drizzle")) {
        weatherIcon.src = "images/drizzle.png";
    } else if (condition.includes("mist")) {
        weatherIcon.src = "images/mist.png";
    } else if (condition.includes("rain")) {
        weatherIcon.src = "images/rain.png";
    } else if (condition.includes("snow")) {
        weatherIcon.src = "images/snow.png";
    }

    console.log(result);
});


