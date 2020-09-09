import { ProxyState } from "../AppState.js";
import weatherService from "../Services/WeatherService.js";


function drawWeather() {
  let templates = ProxyState.weather.WeatherTemplate
  document.getElementById('draw-weather').innerHTML = templates
}
export default class WeatherController {
  constructor() {
    ProxyState.on("weather", drawWeather);
    this.getWeather()
  }

  getWeather() {
    try {
      weatherService.getWeather()
    }
    catch (e) {
      console.error(e)
    }
  }
  changeTemp(temp) {
    try {
      weatherService.changeTemp(temp)
    } catch (error) {
      console.error(error);
    }
    drawWeather()
  }
}

