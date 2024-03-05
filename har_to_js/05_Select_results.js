/*
 * Creator: Firefox 122.0.1
 * Browser: Firefox 122.0.1
 */

import { sleep, group } from 'k6';
import http from 'k6/http';

export const options = {};

export default function main() {
  // eslint-disable-next-line no-unused-vars
  let response;

  group('page_5 - http://localhost:1080/webtours/', () => {
    response = http.post(
      'http://localhost:1080/cgi-bin/reservations.pl',
      {
        outboundFlight: '021;301;02/13/2024',
        returnFlight: '201;301;03/14/2024',
        numPassengers: '1',
        advanceDiscount: '0',
        seatType: 'Coach',
        seatPref: 'None',
        'reserveFlights.x': '76',
        'reserveFlights.y': '6',
      },
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
          Referer: 'http://localhost:1080/cgi-bin/reservations.pl',
          Cookie:
            'MSO=SID&1707745210; MTUserInfo=firstName&Jojo&address2&&username&jojo&hash&47&lastName&Bean%0A&address1&&creditCard&&expDate&%0A',
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
