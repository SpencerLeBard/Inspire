import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService {
  async getWeather() {
    let res = await api.get('weather');
    ProxyState.weather = new Weather(res.data);
  }


  async changeTemp(temp) {
    let weather = ProxyState.weather
    if (temp) {
      weather.isfar = false
    } else {
      weather.isfar = true
    }
    ProxyState.weather = ProxyState.weather //reset the thing
  }

}

const weatherService = new WeatherService();
export default weatherService;

//exporting 