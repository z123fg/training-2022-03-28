let taskInput;
let incompleteTasks;
let completedTasks;
let clearButton;
let formHandler;

const baseUrl = "http://localhost:3000/";
const path = "todos";

// Make sure window is loaded before registering events for elements
window.onload = async (event) => {
  console.log("page fully loaded");
  taskInput = document.getElementById("new-task");
  incompleteTasks = document.getElementById("incomplete-tasks");
  completedTasks = document.getElementById("completed-tasks");
  clearButton = document.getElementById("clear");
  formHandler = document.querySelector(".input-class");
  await getTodos();
  registerFormHandler();
  registerListItemEventHandlers();
};

// Gets all todos from server
const getTodos = async () => {
  await fetch([baseUrl, path].join(""))
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderTodos(data);
    })
    .catch((err) => console.log);
};

// Create new todo on server
const postTodo = async (todo = "") => {
  if (!todo || todo.length < 1) return;

  await fetch([baseUrl, path].join(""), {
    method: "POST",
    body: JSON.stringify({
      content: todo,
      completed: false,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const dataArr = [];
      dataArr.push(data);
      console.log(dataArr);
      renderTodos(dataArr);
    });
};

const deleteTodo = async (todoId) => {
  if (!todoId) return;

  await fetch(`${baseUrl}${path}/${todoId}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      const dataArr = [];
      dataArr.push(data);
      console.log(dataArr);
      renderTodos(dataArr);
    });
};

const registerFormHandler = () => {
  const formHandler = document.querySelector(".input-class");

  formHandler.addEventListener("submit", (e) => {
    e.preventDefault();
    let taskInput = document.getElementById("new-task");

    postTodo(taskInput.value);
    formHandler.reset();
  });
};

const registerListItemEventHandlers = () => {
  [...document.getElementsByClassName("user-list-item-test")].forEach(
    (element) => {
      element
        .getElementsByClassName("delete")[0]
        .addEventListener("click", (e) => {
          e.preventDefault();
          deleteTodo(element.id);
        });
    }
  );
};

function renderTodos(data) {
  const html = data
    .slice(0)
    .reverse()
    .map((user) => {
      return `
        <li class="user-list-item-test" id=${user.id}>
          <div class="content-group">
              <label> ${user.content}</label>
          </div>
          <form class="btn-groups">
              <button class="edit">Edit</button>
              <button class="delete">Delete</button>
              <input type="checkBox" checked="">
          </form>
        </li>
      `;
    })
    .join("");

  document
    .querySelector("#incomplete-tasks")
    .insertAdjacentHTML("afterbegin", html);
}
