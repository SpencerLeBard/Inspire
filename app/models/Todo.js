export default class Todo {
  constructor({ id, _id, user, completed, description }) {
    this.id = id || _id;
    this.user = user
    this.completed = completed
    this.description = description
  }


  get TodoTemplate() {
    return `
    <div class="card p-3 m-3 todo-template">
    <h5 class="card-header">${this.user} ${this.description} <input type="checkbox" id="test" /> <label for="test">Test</label>
    <i class="fa fa-trash
    align-self-end" onclick="app.todoController.removeTodo('${this.id}')"></i></h5>
    <div class="card-body">
    </div>
  </div>`
  }
}