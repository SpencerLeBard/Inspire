import { api } from "./AxiosService";
import { ProxyState } from "../AppState";

//TODO create methods to retrieve data and save to the State
class ImageService {

  constructor() {

  }

  async getImg() {
    let res = await api.get('images')
    ProxyState.img = res.url
  }

}

const imageService = new ImageService();
export default imageService;