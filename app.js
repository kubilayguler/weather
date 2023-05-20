const url = 'https://api.openweathermap.org/data/2.5/'
const key = '372b08edda3e912398c7496e7ad4a982'

const getCity = (e) => {
 if(e.keyCode == '13')
 getResult(searchBar.value)
}

const getResult = (cityName) => {
 let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
 fetch(query)
 .then(weather => {
    return weather.json()
 })
 .then(displayResult)
}

const displayResult = (result) => {
    let city = document.querySelector('h2')
    city.innerText = `${result.name}`

    let weather = document.querySelector('h3')
    weather.innerText = `${result.weather[0].description}`

    let temp = document.querySelector('h4')
    temp.innerText = `${Math.round(result.main.temp)}°c`
}

const searchBar = document.getElementById('searchbar')
searchBar.addEventListener('keypress',getCity)

const toptext = document.querySelector('h5')
setInterval(getDate, 1000);

function getDate() {
    const day = new Date().toLocaleDateString('tr-TR', {weekday: 'long'})
    const date = new Date().toLocaleDateString('tr-TR')
    const time = new Date().toLocaleTimeString('tr-TR')
    toptext.innerHTML= (day+"  |  "+date+"  |  "+time)
}