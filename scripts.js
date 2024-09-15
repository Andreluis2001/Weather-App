const search = document.querySelector("#search");
const info = document.querySelector("#weather-info");

async function getWeather(){
    const key = "J963KSZFK5CSLNH9WEQTZB5U5";
    const city = document.querySelector("#city").value;
    const weatherAPI = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${key}&contentType=json`;
    try{
        const res = await fetch(weatherAPI);
        const data = await res.json();
        const weather = await data.description;
        const cityname = await data.address;
        info.innerHTML = "";
        info.innerHTML = `<p>${weather}</p><p>${cityname}</p>`;
    }catch(err){
        console.error(err);
        info.innerHTML = "Error fetching weather data.";
        return;
    }
}
search.addEventListener("click", function(){
    getWeather();
});

