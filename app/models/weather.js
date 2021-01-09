function conCell(kelvin) {
  let cell = (kelvin - 273.15);
  return cell.toFixed()
}



function conFar(kelvin) {
  let far = (((kelvin - 273.15) * 1.8) + 32);
  return far.toFixed()
}


export default class Weather {
  constructor(data) {
    this.city = data.name
    this.kelvin = data.main.temp
    this.far = conFar(this.kelvin)
    this.cell = conCell(this.kelvin)
    this.isfar = true;
    this.iscell = false;
  }

  get WeatherTemplate() {
    if (this.isfar) {
      return `
      <div class="col-4" role="button">
      <div class ="weathertemplatestyle"            
      <div onclick="app.weatherController.changeTemp('${this.isfar}')">
      <div class="card">
          <div class="card-body">
          <h4 class="card-title"> Weather In Boise </h4>
              <h6 class="card-text">Fahrenheit:${this.far}</h6>
          <div class="card-body">
          </div>
        </div>
        <div>`
    } else {
      return `
      <div class="col-4" role="button">
      <div class ="weathertemplatestyle"
      <div onclick="app.weatherController.changeTemp(${this.isfar})">
      <div class="card">
          <div class="card-body">
                  <h4 class="card-title"> Weather In Boise </h4>
              <p class="card-text">Celsius${this.cell}</p>
          <div class="card-body">
          </div>
        </div>
        </div>`
    }
  }
}