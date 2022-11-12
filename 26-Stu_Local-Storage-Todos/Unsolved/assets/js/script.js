var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// TODO: What is the purpose of this function? it sets the to do list as a blank string and counts the number of to do's entered.
// this puts the to dos entered into the list below and resets it for the next entry. it also appends a button to mark the entries
// as complete.
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code. sets as blank string and lists a count of todos.
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;
  
  // TODO: Describe the functionality of the following `for` loop.
  //it creates a list for the todos and complete button, based on the amount of todos entered 
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function? to retrieve and parse the stringified data from local storage.
//
function init() {
  // TODO: What is the purpose of the following line of code? it unstringifies the stringified code using  JSON.
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: Describe the functionality of the following `if` statement. if there is data, then store in todos
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code. this renders the todos after getting them and translating them from local storage.
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code. store the entered todos as string using json
  localStorage.setItem("todos", JSON.stringify(todos));
}
// TODO: Describe the purpose of the following line of code. when you submit 
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  if (todoText === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code.
  todos.push(todoText);
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called?
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    storeTodos();
    renderTodos();
  }
});

init();
