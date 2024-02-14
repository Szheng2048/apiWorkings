const url = "https://dog.ceo/api/breeds/image/random"
let latinUrl
let longinUrl
const latitude = document.querySelector("#lat")
const longitude = document.querySelector("#long")
let conditionObj = {
    0: "Clear Skies",
    1: "Mainly Clear",
    2: "Partly Cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing Rime Fog",
    51: "Drizzle: Light",
    53: "Drizzle: Moderate",
    55: 'Drizzle: Dense',
    56: "Freezing Drizzle: Light",
    57: "Freezing Drizzle: Dense",
    61: "Rain: Light",
    63: "Rain: Moderate",
    65: "Rain: Heavy",
    66: "Freezing Rain: Light",
    67: "Freezing Rain: Heavy",
    71: "SnowFall: Slight",
    73: "SnowFall: Moderate",
    75: "SnowFall:Heavy",
    77: "Snow Grains",
    80: "Rain Showers: Slight",
    81: "Rain Showers: Moderate",
    82: "Rain Showers: Heavy",
    85: "Snow Showers: Slight",
    86: "Snow Showers: Heavy",
    95: "Thunderstorm: Slight",
    96: "Thunderstorm with Slight Hail",
    99: "Thunderstorm with Heavy Hail"
} 


latitude.addEventListener("change",(event)=>{
    latinUrl = event.target.value//parseFloat(event.target.value)*1
    console.log(latinUrl)
})
longitude.addEventListener("change",(event)=>{
    longinUrl = event.target.value
})



// let weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latinUrl}&longitude=${longinUrl}&current=temperature_2m&temperature_unit=fahrenheit&current=weather_code,wind_speed_10m,wind_direction_10m&wind_speed_unit=mph`
//click listener on button

const generateDogButton = document.querySelector(".btn-primary")
generateDogButton.addEventListener("click",()=>{
    fetch(url)
    .then((response)=>{
        console.log("response recieved")
        return response.json()
    })
    .then((object)=>{
        console.log("response processed")
        let newDogImageUrl = object.message
        let dogTitle = newDogImageUrl.split("/")
        console.log(dogTitle[4])
        document.querySelector("img").src = newDogImageUrl
        document.querySelector(".card-title").innerHTML = dogTitle[4]
    })
})

const generateTheWeather = document.querySelector(".btn-success")

function changingWeather(object){
    let additionOfWeather = document.querySelector("#weatheringNews")
    let temperature = document.createElement("p")
        console.log(object)
        temperature.innerHTML = `The temperature is ${object.current.temperature_2m}`
        additionOfWeather.appendChild(temperature)
        let typeOfCondition = document.createElement("p")
        typeOfCondition.innerHTML = `${conditionObj[object.current.weather_code]}`
        additionOfWeather.appendChild(typeOfCondition)
        let wind = document.createElement("p")
        wind.innerHTML = `The wind speed is ${object.current.wind_speed_10m} miles per hour at a degree of ${object.current.wind_direction_10m}`
        additionOfWeather.appendChild(wind)
}

generateTheWeather.addEventListener("click",()=>{
    let weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latinUrl}&longitude=${longinUrl}&current=temperature_2m&temperature_unit=fahrenheit&current=weather_code,wind_speed_10m,wind_direction_10m&wind_speed_unit=mph`
    fetch(weatherUrl)
    .then((response)=>{
        console.log("response recieved")
        return response.json()
    })
    .then((object)=>{
        // let additionOfWeather = document.querySelector("#weatheringNews")
        changingWeather(object)
        // let temperature = document.createElement("p")
        // console.log(object)
        // temperature.innerHTML = `The temperature is ${object.current.temperature_2m}`
        // additionOfWeather.appendChild(temperature)
        // let typeOfCondition = document.createElement("p")
        // typeOfCondition.innerHTML = `${conditionObj[object.current.weather_code]}`
        // additionOfWeather.appendChild(typeOfCondition)
        // let wind = document.createElement("p")
        // wind.innerHTML = `The wind speed is ${object.current.wind_speed_10m} miles per hour at a degree of ${object.current.wind_direction_10m}`
        // additionOfWeather.appendChild(wind)
    })
})
