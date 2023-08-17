const todolist = [];
renderTodoList();

function renderTodoList() {
  let todolistHTML = "";

  for (i = 0; i < todolist.length; i++) {
    const element = todolist[i];
    const html = 
        `<div><input type="checkbox" class="check-box" ${element.checked ? 'checked' : ''} onclick="handleCheckbox(${i});"/></div>
        <div class="${element.checked ? 'strikethrough' : ''}">${element.name}</div>
        <div class="${element.checked ? 'strikethrough' : ''}">${element.dueDate}</div>  
        <button class="delete-button" onclick="
            todolist.splice(${i}, 1);
            renderTodoList();
        ">Remove</button>` ;
        
    todolistHTML += html;
  }
  document.querySelector(".js-todo-list").innerHTML = todolistHTML;
}

function takeInput() {
  let inputElement = document.querySelector(".js-input").value;
  let duedate = document.querySelector(".js-due-date").value;
  if(inputElement.trim() && duedate){
  const todoObject = {
    name: inputElement,
    dueDate: duedate,
    checked: false
  };

  todolist.push(todoObject);
  console.log(todolist);

  document.querySelector(".js-input").value = "";
  document.querySelector(".js-due-date").value = "";
  renderTodoList();
} else{
  alert('Enter both task and due date!')
}
}
function handleCheckbox(j){
  todolist[j].checked = !todolist[j].checked;
  renderTodoList();
}