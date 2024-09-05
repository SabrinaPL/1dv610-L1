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

    // Fetch the current time.
    const timeFetcher = new TimeFetcher()
    const time = await timeFetcher.fetchTime()

    // Hide the form and display the custom welcome message.
    nameForm.setAttribute('hidden', '')
    welcomeMessage.textContent = `Welcome ${userName}! It's a beautiful day and the time is ${time}!`
  })
})
