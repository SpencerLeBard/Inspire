export default class Weather {
  constructor(data) {
    //TODO You should convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp


  }
  get WeatherTemplate() {
    return `            
    <div class="col-4">
      <div class="card">
      <div class="card-body">
              <h4 class="card-title"> Weather </h4>
              <p class="card-text">${this.kelvin}</p>
          <div class="card-body">
      </div>
    </div>`
  }
}