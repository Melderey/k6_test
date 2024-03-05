/*
 * Creator: Firefox 122.0.1
 * Browser: Firefox 122.0.1
 */

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {}

export default function main() {
  let response

  group('page_1 - http://localhost:1080/webtours/', function () {
    response = http.post(
      'http://localhost:1080/cgi-bin/itinerary.pl',
      'flightID=0-7-JB%2C753-1564-JB&removeAllFlights.x=65&removeAllFlights.y=12&.cgifields=1%2C2',
      {
        headers: {
          Host: 'localhost:1080',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
          Accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
          'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
          'Accept-Encoding': 'gzip, deflate, br',
          'Content-Type': 'application/x-www-form-urlencoded',
          Origin: 'http://localhost:1080',
          Connection: 'keep-alive',
          Referer: 'http://localhost:1080/cgi-bin/itinerary.pl',
          Cookie:
            'MSO=SID&1707810977; MTUserInfo=hash&47&firstName&Jojo&lastName&Bean%0A&address1&&address2&&username&jojo',
          'Upgrade-Insecure-Requests': '1',
          'Sec-Fetch-Dest': 'frame',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'same-origin',
          'Sec-Fetch-User': '?1',
        },
      }
    )
  })

  // Automatically added sleep
  sleep(1)
}
