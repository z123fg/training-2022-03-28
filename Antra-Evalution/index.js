let taskInput;
let clearButton;
let formHandler;

const baseUrl = "http://localhost:3000/";
const path = "todos";

// Make sure window is loaded before registering events for elements
window.onload = async (e) => {
  e.preventDefault();
  console.log("page fully loaded");
  taskInput = document.getElementById("new-task");
  clearButton = document.getElementById("clear");
  formHandler = document.querySelector(".input-class");
  await getTodos();
  registerFormHandler();
  registerClearButtonHandler();
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

const clearTodos = async () => {
  [...document.getElementsByClassName("user-list-item-test")].forEach(
    (element) => {
      deleteTodo(element.id);
    }
  );
};

const registerClearButtonHandler = () => {
  const clearButton = document.getElementById("clear");

  clearButton.addEventListener("click", (e) => {
    e.preventDefault();
    clearTodos();
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

const handleDeleteButton = (todoId) => deleteTodo(todoId);

const handleCheckedTodo = (todoId) => {
  console.log(todoId);
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
              <button type="button" class="edit">Edit</button>
              <button type="button" class="delete" onclick="handleDeleteButton(${user.id})">Delete</button>
              <input type="checkBox" onchange="handleCheckedTodo(${user.id})">
          </form>
        </li>
      `;
    })
    .join("");

  document
    .querySelector("#incomplete-tasks")
    .insertAdjacentHTML("afterbegin", html);
}
