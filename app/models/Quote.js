export default class Quote {
  constructor(data) {


    this.quote = data.quote.body
    this.author = data.quote.author
  }
  get QuoteTemplate() {
    return `            
    <div class="col-4">
      <div class="card">
          <div class="card-body">
              <h4 class="card-title">${this.author}
              <p class="card-text">${this.quote}</p>
          </div>
      </div>
    </div>`
  }
}
