import imageService from "../Services/ImageService.js"
import { ProxyState } from "../AppState.js";


function _drawImg() {
  let image = ProxyState.image
  document.getElementById("bg-img").style.backgroundImage = `url(${image})`
}

export default class ImageController {
  constructor() {
    this.getImg()
    ProxyState.on("image", _drawImg)
  }

  getImg() {
    try {
      imageService.getImg()
    } catch (error) {
      console.error(error);
    }
  }

}





