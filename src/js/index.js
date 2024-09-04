// Will present a form for the user to input their name. 
// Once form has been sent the user will be greeted with a customised welcome message and the current date and time will be displayed and the background image will differ at daytime and at nighttime.

import { TimeFetcher } from '../modules/TimeFetcher.js'

const timeFetcher = new TimeFetcher()

const time = await timeFetcher.fetchTime()

console.log(time)