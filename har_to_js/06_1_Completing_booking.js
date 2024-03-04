/*
 * Creator: Firefox 122.0.1
 * Browser: Firefox 122.0.1
 */

import { sleep, group } from 'k6'
import http from 'k6/http'
import { HOST, PORT } from '../utils/utils.js';

export const options = {}

export default function main() {
  let response

  group(`page_6 - http://${HOST}:${PORT}/webtours/`, function () {
    response = http.post(
      `http://${HOST}:${PORT}/cgi-bin/reservations.pl`,
      {
        firstName: 'Jojo',
        lastName: 'Bean',
        address1: 'Milan',
        address2: '123',
        pass1: 'Jojo Bean',
        creditCard: '6666666666',
        expDate: '01/25',
        oldCCOption: '',
        numPassengers: '1',
        seatType: 'Coach',
        seatPref: 'None',
        outboundFlight: '021;301;02/13/2024',
        advanceDiscount: '0',
        returnFlight: '201;301;03/14/2024',
        JSFormSubmit: 'off',
        'buyFlights.x': '82',
        'buyFlights.y': '6',
        '.cgifields': 'saveCC',
      },
      {
        headers: {
          Host: `${HOST}:${PORT}`,
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
          Accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
          'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
          'Accept-Encoding': 'gzip, deflate, br',
          'Content-Type': 'application/x-www-form-urlencoded',
          Origin: `http://${HOST}:${PORT}`,
          Connection: 'keep-alive',
          Referer: `http://${HOST}:${PORT}/cgi-bin/reservations.pl`,
          Cookie:
            'MSO=SID&1707745210; MTUserInfo=firstName&Jojo&address2&&username&jojo&hash&47&lastName&Bean%0A&address1&&creditCard&&expDate&%0A',
          'Upgrade-Insecure-Requests': '1',
          'Sec-Fetch-Dest': 'frame',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'same-origin',
          'Sec-Fetch-User': '?1',
        },
      }
    )

    response = http.post(
      `http://${HOST}:${PORT}/cgi-bin/reservations.pl`,
      {
        'Book Another.x': '75',
        'Book Another.y': '11',
      },
      {
        headers: {
          Host: `${HOST}:${PORT}`,
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
          Accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
          'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
          'Accept-Encoding': 'gzip, deflate, br',
          'Content-Type': 'application/x-www-form-urlencoded',
          Origin: `http://${HOST}:${PORT}`,
          Connection: 'keep-alive',
          Referer: `http://${HOST}:${PORT}/cgi-bin/reservations.pl`,
          Cookie:
            'MSO=SID&1707745210; MTUserInfo=firstName&Jojo&username&jojo&address2&&hash&47&address1&&lastName&Bean%0A',
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
