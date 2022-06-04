const todoForm = document.getElementById("newTodoForm");
const ULtodoList = document.getElementById("todoList");

todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let LinewTodo = document.createElement("li");
  let taskValue = document.getElementById("task").value;
  var btn = document.createElement("button");
  var btnx = document.createTextNode("x"); 
  btn.appendChild(btnx);
  LinewTodo.innerText = taskValue;
  LinewTodo.isCompleted = false;
  todoForm.reset();
  ULtodoList.appendChild(LinewTodo);
  LinewTodo.appendChild(btn);

  // save to localStorage
  localStorage["list"] = ULtodoList.innerHTML
});

ULtodoList.addEventListener("click", function(event) {
  let clickedListItem = event.target;
  const targetTagToLowerCase = event.target.tagName.toLowerCase();

  if (!clickedListItem.isCompleted) {
    clickedListItem.style.textDecoration = "line-through";
    clickedListItem.isCompleted = true;
  }  
  else {
    clickedListItem.style.textDecoration = "none";
    clickedListItem.isCompleted = false;
  }

  if (targetTagToLowerCase === "button") 
  {
    event.target.parentNode.remove();
  }
  localStorage["list"] = ULtodoList.innerHTML
 
});

if (localStorage["list"]) 
{
    ULtodoList.innerHTML = localStorage["list"];
}

