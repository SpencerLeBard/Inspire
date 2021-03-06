import { ProxyState } from "../AppState.js";
import { api } from "../Services/AxiosService.js";
import Todo from "../Models/Todo.js";


let url = 'spencer/todos/' //NOTE url in quotes


class TodoService {
  async getTodos() {
    let res = await api.get(url); //NOTE url quotes
    ProxyState.todos = res.data.data.map(t => new Todo(t))
  }

  async addTodo(todos) {
    let res = await api.post(url, todos)
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data.data)]
    document.getElementById("draw-todos")
  }

  async toggleTodoStatus(todosid) {
    let status = api.put(`${url}${todosid}`);
  }
  async removeTodo(todosid) {
    let del = api.delete(url + todosid)
    ProxyState.todos = ProxyState.todos.filter(d => d.id !== todosid)
  }

}

const todoService = new TodoService();
export default todoService;