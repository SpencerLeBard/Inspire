import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService {
  async getWeather() {
    let res = await api.get('weather');
    ProxyState.weather = new Weather(res.data);
  }


  async changeTemp(temp) {
    let temperature = ProxyState.weather
    if (temp) {
      temperature.isfar = false
    } else {
      temperature.isfar = true
    }
    ProxyState.weather = ProxyState.weather //reset the thing
  }

}

const weatherService = new WeatherService();
export default weatherService;

//exporting 