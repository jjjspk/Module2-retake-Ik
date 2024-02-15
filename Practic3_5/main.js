function init() {
  document.head.appendChild(document.createElement('title')).textContent =
    'Registration Form'
  document.body.appendChild(document.createElement('h2')).textContent =
    'Register'
  const divElement_1 = document.createElement('div')
  divElement_1.appendChild(
    Object.assign(document.createElement('label'), {
      htmlFor: 'name',
      textContent: 'Full name',
    })
  )
  divElement_1.appendChild(
    Object.assign(document.createElement('input'), {
      type: 'text',
      id: 'name',
      name: 'name',
      required: '',
    })
  )
  document.body.appendChild(divElement_1)
  const divElement_2 = document.createElement('div')
  divElement_2.appendChild(
    Object.assign(document.createElement('label'), {
      htmlFor: 'email',
      textContent: 'Email Address',
    })
  )

  divElement_2.appendChild(
    Object.assign(document.createElement('input'), {
      type: 'email',
      id: 'email',
      name: 'email',
      required: '',
    })
  )
  document.body.appendChild(divElement_2)
  const divElement_3 = document.createElement('div')
  divElement_3.appendChild(
    Object.assign(document.createElement('button'), {
      type: 'submit',
      textContent: 'Register',
    })
  )
  document.body.appendChild(divElement_3)
  const divElement_4 = document.createElement('div')
  document.body.appendChild(divElement_4)
  divElement_3.addEventListener('click', addTask)
}
function addTask() {
  const divElement = document.querySelectorAll('div')
  const pElement_1 = document.createElement('p')
  const pElement_2 = document.createElement('p')
  const nameInput = document.querySelector('#name')
  const emailInput = document.querySelector('#email')
  pElement_2.textContent =
    'name:' + nameInput.value + '\n' + 'email:' + emailInput.value
  pElement_1.appendChild(pElement_2)
  divElement[3].appendChild(pElement_1)
  nameInput.value = ''
  emailInput.value = ''
}
init()
