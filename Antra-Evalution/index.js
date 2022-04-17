let taskInput;
let clearButton;
let formHandler;
let editButton;

const baseUrl = "http://localhost:3000/";
const path = "todos";

// Make sure window is loaded before registering events for elements
window.onload = (e) => {
  e.preventDefault();
  console.log("page fully loaded");

  getTodos();
  registerFormHandler();
  registerClearButtonHandler();
};

// Gets all todos from server
const getTodos = () => {
  fetch([baseUrl, path].join(""))
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderTodos(data);
    })
    .catch((err) => console.log);
};

// Create new todo on server
const postTodo = (todo = "") => {
  if (!todo || todo.length < 1) return;

  fetch([baseUrl, path].join(""), {
    method: "POST",
    body: JSON.stringify({
      content: todo.trim(),
      isCompleted: false,
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
      isCompleted: condition,
    }),
  });
};

// delete items in the list
const deleteTodo = (todoId) => {
  if (!todoId) return;

  console.log("todoId", todoId);

  fetch(`${baseUrl}${path}/${todoId}`, {
    method: "DELETE",
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

// POST edited data using POST Method
const handleEditButton = (todoId) => {
  let ListWithId = document.getElementById(todoId);

  let userContent = ListWithId.querySelector(".user-content");

  let editableInput = ListWithId.querySelector(".content-group > input");

  editableInput.classList.toggle("inputEdit");
  userContent.classList.toggle("user-content-hidden");
  userContent.textContent = editableInput.value.trim();

  let checkBox = ListWithId.lastElementChild.lastElementChild;

  if (checkBox.checked) {
    updateTodo(todoId, userContent.textContent, true);
  } else {
    updateTodo(todoId, userContent.textContent, false);
  }

  // updateTodo(todoId, userContent.textContent, false);
};

const handleDeleteButton = (todoId) => {
  deleteTodo(todoId);
  document.getElementById(todoId).remove();
};

// check whether the checkbox is checked or not
// update todos based on condition
const handleCheckedTodo = (todoId) => {
  const liId = document.getElementById(todoId);
  const checkbox = liId.lastElementChild.lastElementChild;

  const completedTasks = document.getElementById("completed-tasks");
  const pendingTasks = document.getElementById("incomplete-tasks");

  let userContent = liId.querySelector(".user-content").textContent;

  if (checkbox.checked) {
    completedTasks.appendChild(liId);
    updateTodo(todoId, userContent, true);
  } else {
    pendingTasks.appendChild(liId);
    updateTodo(todoId, userContent, false);
  }
};

// to delete all the items in the list
const clearTodos = () => {
  [...document.getElementsByClassName("pending-user-list-item")].forEach(
    (element) => {
      console.log("from clear function: ", element);
      handleDeleteButton(element.id);
    }
  );
};

const registerClearButtonHandler = () => {
  const clearButton = document.getElementById("clear");

  clearButton.addEventListener("click", (e) => {
    clearTodos();
  });
};

function renderTodos(data) {
  let completedHTML = "";
  let incompltedHTML = "";

  data.reverse().forEach((user) => {
    if (user.isCompleted) {
      completedHTML += `
      <li class="pending-user-list-item" id=${user.id}>
        <div class="content-group">
            <label class="user-content"> ${user.content.trim()}</label>
            <input class='inputEdit' type='text'>
        </div>
        <form class="btn-groups">
            <button type="button" class="edit" onclick="handleEditButton(${
              user.id
            })">Edit</button>
            <button type="button" class="delete" onclick="handleDeleteButton(${
              user.id
            })">Delete</button>
            <input type="checkBox" class="checkbox" checked onchange="handleCheckedTodo(${
              user.id
            })">
        </form>
      </li>`;
    } else {
      incompltedHTML += `   <li class="pending-user-list-item" id=${user.id}>
      <div class="content-group">
          <label class="user-content"> ${user.content.trim()}</label>
          <input class='inputEdit' type='text'>
      </div>
      <form class="btn-groups">
          <button type="button" class="edit" onclick="handleEditButton(${
            user.id
          })">Edit</button>
          <button type="button" class="delete" onclick="handleDeleteButton(${
            user.id
          })">Delete</button>
          <input type="checkBox" class="checkbox" onchange="handleCheckedTodo(${
            user.id
          })">
      </form>
    </li>`;
    }
  });

  document
    .querySelector("#incomplete-tasks")
    .insertAdjacentHTML("afterbegin", incompltedHTML);

  document
    .querySelector("#completed-tasks")
    .insertAdjacentHTML("afterbegin", completedHTML);
}
