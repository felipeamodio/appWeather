export default async function getCurrentWeather(locationCoords){
    const axios = require('axios')

    const lat = locationCoords.latitude

    const lon = locationCoords.longitude

    var results = []


    await axios.get(`https://api.openweathermap.org/data/2.5/weather?latitude=${lat}&longitude=${lon}&appid={ff56406ac83894803b1ef9c84c47334b}`).then(function (response){
    
        const data = response.data
        const locationName = (data.sys.country + ', ' + ' ' + data.name)
        const temperaturaMin = data.main.temp_min
        const temperaturaMax = data.main.temp_max
        const wind = data.wind.speed
        const humidity = data.main.humidity
        const currentTemperatura = data.main.temp


        result = [currentTemperatura, temperaturaMin, temperaturaMax, locationName, wind, humidity]
        
    })
    .catch(function(error){
        console.log(error)
    })

    return results
}