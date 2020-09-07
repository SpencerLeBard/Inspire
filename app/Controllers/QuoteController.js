import { ProxyState } from "../AppState.js";
import quoteService from "../Services/QuoteService.js";

function drawQuote() {
  let quote = ProxyState.quote
  let templates = ''
  ProxyState.quote.forEach(w => templates += w.QuoteTemplate)
  document.getElementById('draw-quote').innerHTML = templates
}
export default class QuoteController {
  constructor() {
    ProxyState.on("quotes", drawQuote);
    this.getQuote()
  }

  getQuote() {
    try {
      quoteService.getQuote()
    }
    catch (e) {
      console.error(e)
    }
  }
}