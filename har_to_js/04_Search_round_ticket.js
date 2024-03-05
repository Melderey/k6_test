/*
 * Creator: Firefox 122.0.1
 * Browser: Firefox 122.0.1
 */

import { sleep, group } from 'k6';
import http from 'k6/http';
import {
  HOST, PORT, LOGIN, DEPART_DATE, RETURN_DATE,
} from '../utils/constants.js';

export const options = {};

export default function main() {
  // eslint-disable-next-line no-unused-vars
  let response;

  group(`page_4 - http://${HOST}:${PORT}/webtours/`, () => {
    response = http.post(
      `http://${HOST}:${PORT}/cgi-bin/reservations.pl`,
      `advanceDiscount=0&depart=Denver&departDate=${DEPART_DATE}&arrive=London&returnDate=${RETURN_DATE}&numPassengers=1&roundtrip=on&seatPref=None&seatType=Coach&findFlights.x=75&findFlights.y=8&.cgifields=roundtrip%2CseatType%2CseatPref`,
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
          Referer: `http://${HOST}:${PORT}/cgi-bin/reservations.pl?page=welcome`,
          Cookie:
            `MSO=SID&1707745210; MTUserInfo=firstName&Jojo&address2&&username&${LOGIN}&hash&47&lastName&Bean%0A&address1&&creditCard&&expDate&%0A`,
          'Upgrade-Insecure-Requests': '1',
          'Sec-Fetch-Dest': 'frame',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'same-origin',
          'Sec-Fetch-User': '?1',
        },
      },
    );

    response = http.get(`http://${HOST}:${PORT}/WebTours/images/button_next.gif`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept: 'image/avif,image/webp,*/*',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Referer: `http://${HOST}:${PORT}/cgi-bin/reservations.pl`,
      },
    });
  });

  // Automatically added sleep
  sleep(1);
}
