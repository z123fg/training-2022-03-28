let taskInput;
let clearButton;
let formHandler;

let editButton;

const baseUrl = "http://localhost:3000/";
const path = "todos";

// Make sure window is loaded before registering events for elements
window.onload = async (e) => {
  e.preventDefault();
  console.log("page fully loaded");
  taskInput = document.getElementById("new-task");
  clearButton = document.getElementById("clear");
  formHandler = document.querySelector(".input-class");

  // editButton = document.querySelector(".edit");

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

// Update the exisitng todo
let updateTodo = (todoId, userContent, condition) => {
  if (!userContent || userContent.length < 1) return;

  fetch(`${baseUrl}${path}/${todoId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: userContent,
      completed: condition,
    }),
  });
};

let updateCondition = (todoId, condition) => {
  fetch(`${baseUrl}${path}/${todoId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      completed: condition,
    }),
  });
};

// delete items in the list
const deleteTodo = async (todoId) => {
  if (!todoId) return;

  console.log("todoId", todoId);

  await fetch(`${baseUrl}${path}/${todoId}`, {
    method: "DELETE",
  });
};

// to delete all the items in the list
const clearTodos = async () => {
  [...document.getElementsByClassName("pending-user-list-item")]
    .reverse()
    .forEach((element) => {
      console.log("from clear function: ", element);
      handleDeleteButton(element.id);
    });
};

// for pass values to POST method
const registerFormHandler = () => {
  const formHandler = document.querySelector(".input-class");

  formHandler.addEventListener("submit", (e) => {
    e.preventDefault();
    let taskInput = document.getElementById("new-task");

    postTodo(taskInput.value);
    formHandler.reset();
  });
};

const handleDeleteButton = (todoId) => {
  deleteTodo(todoId);
  document.getElementById(todoId).remove();
};

const registerClearButtonHandler = () => {
  const clearButton = document.getElementById("clear");

  clearButton.addEventListener("click", (e) => {
    clearTodos();
  });
};

// const handleCheckedTodo = (todoId) => {
//   const liId = document.getElementById(todoId);
//   const checkbox = liId.lastElementChild.lastElementChild;

//   const completedTasks = document.getElementById("completed-tasks");
//   const pendingTasks = document.getElementById("incomplete-tasks");

//   if (checkbox.checked) {
//     completedTasks.appendChild(liId);
//     //updateCondition(todoId, false);
//   } else {
//     pendingTasks.appendChild(liId);
//     //updateCondition(todoId, true);
//   }
// };

function renderTodos(data, condition = false) {
  const html = data
    .slice(0)
    .reverse()
    .map((user) => {
      return `
        <li class="pending-user-list-item" id=${user.id}>
          <div class="content-group">
              <label class="user-content"> ${user.content}</label>
              <input class='inputEdit' type='text'>
          </div>
          <form class="btn-groups">
              <button type="button" class="edit" onclick="handleEditButton(${user.id})">Edit</button>
              <button type="button" class="delete" onclick="handleDeleteButton(${user.id})">Delete</button>
              <input type="checkBox" class="checkbox" onchange="handleCheckedTodo(${user.id})">
          </form>
        </li>
      `;
    })
    .join("");

  document
    .querySelector("#incomplete-tasks")
    .insertAdjacentHTML("afterbegin", html);

  // document
  //   .querySelector("#completed-tasks")
  //   .insertAdjacentHTML("afterbegin", html);
}

const handleEditButton = (todoId) => {
  let ListWithId = document.getElementById(todoId);

  let userContent = ListWithId.querySelector(".user-content");

  let editableInput = ListWithId.querySelector(".content-group > input");

  editableInput.classList.toggle("inputEdit");
  userContent.classList.toggle("user-content-hidden");
  userContent.textContent = editableInput.value;

  updateTodo(todoId, userContent.textContent, false);
};
