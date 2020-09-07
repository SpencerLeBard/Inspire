import TodoController from "./controllers/TodoController.js";
import WeatherController from "./controllers/WeatherController.js";
import ImageController from "./Controllers/ImageController.js"


//TODO Dont forget to register all your controllers	
class App {
  constructor() {
    this.weatherController = new WeatherController();
    this.todoController = new TodoController();
    this.imgController = new ImageController
  }
}


window["app"] = new App();