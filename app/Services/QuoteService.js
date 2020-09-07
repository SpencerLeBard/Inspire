import { ProxyState } from "../AppState.js";
import Quote from "../Models/Quote.js";
import { api } from "./AxiosService.js";
class QuoteService {
  async getQuote() {
    let res = await api.get('quotes');
    ProxyState.quote = new Quote(res.quote.source);
  }
}


const quoteService = new QuoteService();


export default quoteService;