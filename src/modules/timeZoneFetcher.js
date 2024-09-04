/**
 *
 *
 * @class TimeZoneFetcher
 */
export class TimeZoneFetcher {
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

      const timeData = response.json()

      console.log(timeData)
    } catch (error) {
      // Error handling.
    }
  }
}