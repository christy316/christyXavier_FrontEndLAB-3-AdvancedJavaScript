const API = {
    KEY : "3d1ee97b3e197bcc9edb998f10a30788",
    BASE_URL : "https://api.openweathermap.org/data/2.5/weather"
}

let searchEle = document.querySelector(".search-box");
searchEle.addEventListener("keypress", setCity)

function setCity(e){
    if(e.keyCode == 13){
        fetchData(searchEle.value)
    }
}

function fetchData(city){

    fetch(`${API.BASE_URL}?q=${city}&appid=${API.KEY}&units=metric`)
    .then(((resp) => resp.json()))
    .then((resp) => displayResults(resp))
}

function displayResults(weatherData){
    let cityName = document.querySelector(".city")
    cityName.innerText = `${weatherData.name}, ${weatherData.sys.country}`

    let date = new Date();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let currDate = `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}` 

    let dateElem = document.querySelector(".date")
    dateElem.innerText = currDate

    let tempElem = document.querySelector(".temp")
    tempElem.innerHTML = Math.round(weatherData.main.temp) + "<span>°c</span>"

    let weatherElem = document.querySelector(".weather")
    weatherElem.innerText = weatherData.weather[0].description

    let hiLoElem = document.querySelector(".hi-low")
    hiLoElem.innerText = Math.round(weatherData.main.temp_min)+ "°c / " + Math.round(weatherData.main.temp_max) +"°c"

}
