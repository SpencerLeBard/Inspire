import todoService from "../Services/TodoService.js";
import { ProxyState } from "../AppState.js";


function _drawTodos() {
  let template = ''
  let todos = ProxyState.todos
  todos.forEach(td => template += td.TodoTemplate)
  document.getElementById('todo-template').innerHTML = template
  _getNumber();
}

function _getNumber() {
  let todo = ProxyState.todos
  let number = todo.length
  for (let i = 0; i < todo.length; i++) {
    let todos = todo[i];
    if (todos.completed == true) {
      number--
    } if (number >= 1) {
      document.getElementById('check-number').innerHTML = `${number}`
    } else if (number == 0) {
      document.getElementById('check-number').innerHTML = `done`
    }
  }
}

export default class TodoController {
  constructor() {
    ProxyState.on("todos", _drawTodos);
    this.getTodos()
    todoService.getTodos();
    ProxyState.on("todos", _getNumber);

  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  addTodo(event) {
    event.preventDefault();
    let form = event.target;
    let todos = {
      description: form.todobody.value,
      completed: false,
      user: "",
      _id: "",
    };

    try {
      todoService.addTodo(todos);
    } catch (error) {
      console.error(error)
    }
  }

  /**
 * This method takes in an id of the Todo that should be togggled as complete
 * @param {string} todoId 
 */
  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }
}