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
    <h5 class="card-header">${this.user} TO DO LIST <i class="fa fa-trash
    align-self-end" onclick="app.TodoController.removeTodo('${this.id}')"></i></h5>
    <div class="card-body">
    </div>
    <form class="form-inline d-flex flex-direction-row" onsubmit="app.TodoController.addTodo(event, '${this.description}')">
    <div class="form-group">
        <label for=""></label>
        <input type="text" name="type" id="type" class="form-control"aria-describedby="helpId">
        <button type= "submit">Add Todo</button>
    </div>
</form>
  </div>`
  }
}