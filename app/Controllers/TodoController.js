import todoService from "../Services/TodoService.js";
import { ProxyState } from "../AppState.js";


function _drawTodos() {
  let template = ''
  let todos = ProxyState.todos
  todos.forEach(t => template += t.TodoTemplate)
  document.getElementById('draw-todo').innerHTML = template
  _getNumber();
}

function _getNumber() {
  let todo = ProxyState.todos
  let number = todo.length
  for (let i = 0; i < todo.length; i++) {
    let todos = todo[i];
    if (todos.completed == true) {
      number--
    }
    if (number >= 1) {
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
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  addTodo(e) {
    e.preventDefault();
    var form = e.target;
    //TODO build the todo object from the data that comes into this method
    var todo = {};
    try {
      todoService.addTodo(todo);
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