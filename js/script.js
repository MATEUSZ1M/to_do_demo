//selectors
const toDoInput = document.querySelector(".todo-input");
const toDoButton = document.querySelector(".todo-button");
const toDoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//function adding to do
const addToDo = (e) => {
  //prevent form from subliting
  e.preventDefault();
  //create div
  const todoDiv = document.createElement("div");
  //add class to div
  todoDiv.classList.add("todo");
  //create li inside div
  const newToDo = document.createElement("li");
  //add text
  newToDo.innerText = toDoInput.value;
  //add class.
  newToDo.classList.add("todo-item");
  //apend child to div
  todoDiv.appendChild(newToDo);
  //add to do to local storage
  saveLocalTodos(toDoInput.value);
  //check mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //prevent from adding empty li
  if (toDoInput.value !== "") {
    toDoList.appendChild(todoDiv);
  } else alert("write sometching first 🦥");
  //clear input value
  toDoInput.value = "";
};
//function deliting or check activation
const deleteCheck = (e) => {
  const item = e.target;

  //delete item
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //animation
    todo.classList.add("fall");
    //call remove todo from local storagegit
    removeLocalTodos(todo);
    //wait for the end of animation
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;

    todo.classList.toggle("completed");
  }
};
//function filter todos by status
const filterToDo = (e) => {
  const todos = toDoList.childNodes;
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
};
// save to dos to local storage
const saveLocalTodos = (todo) => {
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

//get from local storage
const getTodos = () => {
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach((todo) => {
    const todoDiv = document.createElement("div");
    //add class to div
    todoDiv.classList.add("todo");
    //create li inside div
    const newToDo = document.createElement("li");
    //add text
    newToDo.innerText = todo;
    //add class.
    newToDo.classList.add("todo-item");
    //apend child to div
    todoDiv.appendChild(newToDo);
    //check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    toDoList.appendChild(todoDiv);
  });
};

//remove from local storage
const removeLocalTodos =(todo)=>{
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem('todos', JSON.stringify(todos));

}

//event listener
document.addEventListener('DOMContentLoaded', getTodos)
toDoButton.addEventListener("click", addToDo);
toDoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterToDo);
