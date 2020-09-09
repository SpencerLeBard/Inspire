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
              <p class="card-text">${this.quote}</p>
              <div style="width: 100px; height: 100px; background-color: white;" 
                  onmouseover="document.getElementById('div1').style.display = 'block';">
             <div id="div1" style="display: none;">${this.author}</div>
          </div>
          </div>
      </div>
      </div>`
  }
}
