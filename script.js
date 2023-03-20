// Empty script file to start with

// S1 find the element
var addTaskButton = document.getElementById("add-task")
var newTaskInput = document.getElementById("task-input");
var todoListContainer = document.getElementById("todo-list");

// S2 write the behaviour
function onAddTaskClicked(event){
    var taskName = newTaskInput.value;
    newTaskInput.value = "";
    todoListContainer.insertAdjacentHTML('afterbegin',taskName);
}

// S3 link event to handler
addTaskButton.addEventListener('click', onAddTaskClicked)
