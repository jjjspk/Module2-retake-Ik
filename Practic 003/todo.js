function init() {
  const addElement = document.querySelector('#addButton')
  addElement.addEventListener('click', addTask)
}
function addTask() {
  const liElement = document.createElement('li')
  const ulElement = document.querySelector('ul')
  const inputElement = document.querySelector('input')
  liElement.textContent = inputElement.value
  ulElement.appendChild(liElement)
  inputElement.value = ''
  console.log(inputElement.value)
}
init()
