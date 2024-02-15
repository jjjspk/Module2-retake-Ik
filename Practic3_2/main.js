function init() {
  const addElement = document.querySelector('.addButton')
  addElement.addEventListener('click', addTask)
}
function addTask() {
  const ulElement = document.querySelector('#todoList')
  const liElement = document.createElement('li')
  const inputElement = document.querySelector('.todoInput')
  liElement.textContent = inputElement.value
  ulElement.appendChild(liElement)
  inputElement.value = ''
}
init()
