import { ProxyState } from "../AppState.js";
import quoteService from "../Services/QuoteService.js";

function drawQuote() {
  let templates = ProxyState.quote.QuoteTemplate
  document.getElementById('draw-quote').innerHTML = templates
}

export default class QuoteController {
  constructor() {
    ProxyState.on("quote", drawQuote);
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