function init() {
    const AddButton1 = document.getElementById('addButton');
    AddButton1.addEventListener("click",addTask);
}

function addTask() {
    const todoInput = document.getElementById('todoinput');
    const taskText = todoInput.value.trim();

    if (taskText !== "") {
        const todoList = document.getElementById('todoList');
        const newTask = document.createElement('li');
        newTask.textContent = taskText;
        todoList.appendChild(newTask);
        todoInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}
init();