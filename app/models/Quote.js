export default class Quote {
  constructor(quote, id, source, author, body) {
    this.author = author
    this.body = body
    this.quote = quote
    this.id = id
    this.source = source
  }
  get QuoteTemplate() {
    return `            
    <div class="col-4">
      <div class="card">
          <div class="card-body">
              <h4 class="card-title">${this.author}
              <p class="card-text">${this.body}</p>
          </div>
      </div>
    </div>`
  }
}
