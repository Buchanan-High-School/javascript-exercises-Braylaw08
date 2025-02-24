// Handle all requests to the server
// param method - "get", "post", "put", "delete"
// param endpoint - URL endpoint to request
// para data - JSON object for post/put requests
let title = document.querySelector(`#title`)
let description = document.querySelector(`#description`)
let due = document.querySelector(`#due`)
async function request(method, endpoint, data = null) {
    let userId = btoa("yourLastName:yourSchoolID");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Basic ${userId}`,
    };
    let options = {
      method: method,
      headers: headers,
    };
    if (method.toLowerCase() === "post") {
      options["body"] = JSON.stringify(data);
    }
    let request = await fetch(`http://10.20.240.46/${endpoint}`, options);
    if (request.ok) {
      let result = await request.json();
  
      // Remember to return the data to the function that called for it.
      return result;
    }
  }
  const todoContainer = document.querySelector(`.todo-container`);
  const form = document.querySelector("form");
  function buildTodo(todo) {
    return `
            <li class="todo" data-completed="${todo.completed}">
              <header>
                <h2>${todo.title}</h2>
                <button data-todoid="${todo.id}" class="btn btn-complete" onclick="completeTodo(this)">Done!</button>
              </header>
              <div class="todo-body">
                <p>${todo.description}</p>
              </div>
              <footer class="todo-due">
                <p>${todo.due}</p>
                <div class="todo-actions">
                    <button onclick="deleteTodo(this)" class="btn btn-warn" data-todoid="${todo.id}">Delete</button>
                </div>
              </footer>
            </li>
      `;
  }
  window.addEventListener("DOMContentLoaded", async function () {
    let result = await request("get", "todo", null);
    console.log(result.data)
    render(result.data)
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    postTodo(event.target);
  });
  async function postTodo(form) {
    let formData = Object.fromEntries(new FormData(form));
    let result = await request("post", "todo", formData);
    if (result) {
      render(result.data);
      form.reset();
    }
  }
  function render(todoList) {
    todoContainer.innerHTML = todoList.map(todo => {
        return `
        <div class="list">
        <h2>${todo.title}</h2>
        <p>${todo.description}</p>
        <p>${todo.due}</p>
        <button data-todoid="${todo.id}" onclick="deleteTodo(this)">Delete</button>
        </div>
      `
    })
}
    async function deleteTodo(button) {
        let todoId = button.dataset.todoid;
        let response = await request(`delete`, `todo/${todoId}`)
        console.log(response)
        render(response.data)
    }