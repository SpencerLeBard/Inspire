import imageService from "../Services/ImageService.js"
import { ProxyState } from "../AppState.js";


//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)

function _drawImg() {
  let img = ProxyState.image
  console.log(img);
  document.getElementById("bg-img").style.backgroundImage = `url(${img})`
}
export default class ImageController {
  constructor() {
    this.getImg()
    ProxyState.on("images", _drawImg)
  }

  getImg() {
    try {
      imageService.getImg()
    } catch (error) {
      console.error(error);
    }
  }


}





