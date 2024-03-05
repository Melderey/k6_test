/*
 * Creator: Firefox 122.0.1
 * Browser: Firefox 122.0.1
 */

import { sleep, group } from 'k6';
import http from 'k6/http';
import { HOST, PORT, LOGIN } from '../utils/constants.js';

export const options = {};

export default function main() {
  // eslint-disable-next-line no-unused-vars
  let response;

  group(`page_9 - http://${HOST}:${PORT}/webtours/`, () => {
    response = http.post(
      `http://${HOST}:${PORT}/cgi-bin/itinerary.pl`,
      {
        1: 'on',
        flightID: '246889677-92430-JB',
        'removeFlights.x': '70',
        'removeFlights.y': '14',
        '.cgifields': '1',
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
          Referer: `http://${HOST}:${PORT}/cgi-bin/itinerary.pl`,
          Cookie:
            `MSO=SID&1707745210; MTUserInfo=firstName&Jojo&username&${LOGIN}&address2&&hash&47&address1&&lastName&Bean%0A`,
          'Upgrade-Insecure-Requests': '1',
          'Sec-Fetch-Dest': 'frame',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'same-origin',
          'Sec-Fetch-User': '?1',
        },
      },
    );
  });

  // Automatically added sleep
  sleep(1);
}
