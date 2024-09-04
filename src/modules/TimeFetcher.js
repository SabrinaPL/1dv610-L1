/**
 *
 *
 * @class TimeFetcher
 */
export class TimeFetcher {
  /**
   *
   * @function - fetches info about current time via world time open api.
   */
  async fetchTime () {
    try {
      const url = 'http://worldtimeapi.org/api/timezone/Europe/Stockholm'

      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(response.status)
      }

      const data = await response.json()

      // I want to parse the time data to retrieve only the current time, for that I need to retrieve the start and end position.
      const timeStart = data.datetime.indexOf('T') + 1
      const timeEnd = data.datetime.indexOf('+') - 1

      // Retrieve the time from the string.
      const currentTime = data.datetime.substring(timeStart, timeEnd)

      return currentTime
    } catch (error) {
      console.log(error)
    }
  }
}