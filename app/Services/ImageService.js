import { api } from "./AxiosService";
import { ProxyState } from "../AppState";

//TODO create methods to retrieve data and save to the State
class ImageService {

  constructor() {

  }

  async getImg() {
    let res = await api.get('images') //https://bcw-sandbox.herokuapp.com/api/images instead??
    ProxyState.image = res.data.url
  }

}

const imageService = new ImageService();
export default imageService;