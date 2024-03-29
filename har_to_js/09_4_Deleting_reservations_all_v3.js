/*
 * Creator: Firefox 123.0
 * Browser: Firefox 123.0
 */

import { sleep, group } from 'k6';
import http from 'k6/http';

export const options = {};

export default function main() {
  // eslint-disable-next-line no-unused-vars
  let response;

  group('page_2 - http://localhost:1080/webtours/', () => {
    response = http.post(
      'http://localhost:1080/cgi-bin/itinerary.pl',
      'flightID=753-795-JB%2C246904448-172324-JB%2C1120-2327-JB%2C0-3076-JB%2C0-38-JB&removeAllFlights.x=28&removeAllFlights.y=6&.cgifields=4%2C1%2C3%2C2%2C5',
      {
        headers: {
          Host: 'localhost:1080',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0',
          Accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
          'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
          'Accept-Encoding': 'gzip, deflate, br',
          'Content-Type': 'application/x-www-form-urlencoded',
          Origin: 'http://localhost:1080',
          Connection: 'keep-alive',
          Referer: 'http://localhost:1080/cgi-bin/itinerary.pl',
          Cookie:
            'MSO=SID&1709703450; MTUserInfo=firstName&Jojo&hash&47&address1&&lastName&Bean%0A&username&jojo&address2&',
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
