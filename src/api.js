export const makeCityQueryUrl = (cityQuery)=> `https://api.openweathermap.org/geo/1.0/direct?q=${cityQuery}&limit=5&appid=${process.env.REACT_APP_WEATHER_KEY}`


export const makeWeatherQueryUrl = (lat,lon) => `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${process.env.REACT_APP_WEATHERBIT_KEY}`


export const getCityQueryMockResponse = {}

export const getWeatherQueryMockResponse =  {}





