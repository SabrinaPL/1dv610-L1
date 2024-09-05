// Will present a form for the user to input their name. 
// Once form has been sent the user will be greeted with a customised welcome message and the current date and time will be displayed and the background image will differ at daytime and at nighttime.

import { TimeFetcher } from '../modules/TimeFetcher.js'

document.addEventListener('DOMContentLoaded', () => {
  const nameForm = document.getElementById('name-form')
  const welcomeMessage = document.getElementById('welcome-message')

  nameForm.addEventListener('submit', async (event) => {
    // Prevent the page from auto reloading at form submit.
    event.preventDefault()

    // Retrieve the user's name from the form.
    const userName = document.getElementById('name').value

    const timeFetcher = new TimeFetcher()
    const time = await timeFetcher.fetchTime()

    // if (time )

    nameForm.setAttribute('hidden', '')
    welcomeMessage.textContent = `Welcome ${userName}!`

    console.log(time)
  })
})
