//selectors
const toDoInput = document.querySelector(".todo-input");
const toDoButton = document.querySelector(".todo-button");
const toDoList = document.querySelector(".todo-list ");

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
  if(toDoInput.value !== ''){
    toDoList.appendChild(todoDiv);
  }else alert('write sometching first 🦥')
  //clear input value
  toDoInput.value = ''
};

//function deliting or check activation

const deleteCheck =()=>{
  
}


//event listener
toDoButton.addEventListener("click", addToDo);
toDoList.addEventListener('click', deleteCheck);
