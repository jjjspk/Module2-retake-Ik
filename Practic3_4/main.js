function init() {
  addTask()
}
function addTask() {
  const divElement = document.querySelectorAll('div')
  const inputElement = document.createElement('input')
  const ulElement = document.createElement('ul')
  inputElement.setAttribute('type', 'text')
  inputElement.setAttribute('placeholder', 'Enter a new task')
  divElement[0].appendChild(inputElement)
  const buttonElement = document.createElement('button')
  buttonElement.textContent = 'add'
  divElement[0].appendChild(buttonElement)
  ulElement.setAttribute('id', 'todoList')
  divElement[1].appendChild(ulElement)
}
init()
