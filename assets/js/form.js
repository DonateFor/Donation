const scriptURL = 'https://script.google.com/macros/s/AKfycbycrjBq4PxfWkduo9unkpCrKTCLiiDBtZ5T9uc-elxYqbk1UIengBiqts1v4DeCIj59/exec'
const form = document.forms['donate']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => openForm())
    .catch(error => console.error('Error!', error.message))
})

