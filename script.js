// Empty script file to start with

// S1 find the element
var addTaskButton = document.getElementById("add-task")
var newTaskInput = document.getElementById("task-input");
var todoListContainer = document.getElementById("todo-list");
var templateContainer = document.getElementById(list-item-template)
var template = templateContainer.innerHTML

// S2 write the behaviour
function onAddTaskClicked(event){
    var taskName = newTaskInput.value;
    newTaskInput.value = "";
    var taskHTML = template.replace("<!--Task_name-->", taskName);
    todoListContainer.insertAdjacentHTML('afterbegin', taskHTML);
}

function onTodoListContainerClicked(event){
    var targetElement = event.toElement;
    
    while (!targetElement.classList.contains("task")){
        targetElement = targetElement.parentElement;
    }
    var checkbox = targetElement.querySelector(".checkbox");
    if (checkbox.checked){
        targetElement.classList.add("completed")
    } else {
        targetElement.classList.remove("completed")
    }
}
 
// S3 link event to handler
addTaskButton.addEventListener('click', onAddTaskClicked)
todoListContainer.addEventListener('click', onTodoListContainerClicked);