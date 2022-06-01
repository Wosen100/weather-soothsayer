export const makeCityQueryUrl = (cityQuery)=> `http://api.openweathermap.org/geo/1.0/direct?q=${cityQuery}&limit=5&appid=${process.env.REACT_APP_WEATHER_KEY}`

export const makeWeatherQueryUrl = (lat,lon) => `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_KEY}`

export const getCityQueryMockResponse = {}

export const getWeatherQueryMockResponse =  {}





