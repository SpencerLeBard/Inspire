export default class Quote {
  constructor(quote, id, source, author) {
    this.quote = quote
    this.id = id
    this.source = source
    this.author = author
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
