import { api } from "./AxiosService.js";
import { ProxyState } from "../AppState.js";

//TODO create methods to retrieve data and save to the State
class ImageService {

  constructor() {

  }

  async getImg() {
    let res = await api.get('images') //https://bcw-sandbox.herokuapp.com/api/images instead??
    ProxyState.image = res.data.large_url
  }

}

const imageService = new ImageService();
export default imageService;