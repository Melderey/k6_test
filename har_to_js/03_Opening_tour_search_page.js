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

  group(`page_3 - http://${HOST}:${PORT}/webtours/`, () => {
    response = http.get(`http://${HOST}:${PORT}/cgi-bin/welcome.pl?page=search`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: `http://${HOST}:${PORT}/cgi-bin/nav.pl?page=menu&in=home`,
        Cookie:
          `MSO=SID&1707745210; MTUserInfo=firstName&Jojo&address2&&username&${LOGIN}&hash&47&lastName&Bean%0A&address1&&creditCard&&expDate&%0A`,
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'frame',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-User': '?1',
      },
    });
    response = http.get(`http://${HOST}:${PORT}/cgi-bin/nav.pl?page=menu&in=flights`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: `http://${HOST}:${PORT}/cgi-bin/welcome.pl?page=search`,
        Cookie:
          `MSO=SID&1707745210; MTUserInfo=firstName&Jojo&address2&&username&${LOGIN}&hash&47&lastName&Bean%0A&address1&&creditCard&&expDate&%0A`,
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'frame',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
      },
    });
    response = http.get(`http://${HOST}:${PORT}/cgi-bin/reservations.pl?page=welcome`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: `http://${HOST}:${PORT}/cgi-bin/welcome.pl?page=search`,
        Cookie:
          `MSO=SID&1707745210; MTUserInfo=firstName&Jojo&address2&&username&${LOGIN}&hash&47&lastName&Bean%0A&address1&&creditCard&&expDate&%0A`,
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'frame',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
      },
    });
    response = http.get(`http://${HOST}:${PORT}/WebTours/images/button_next.gif`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept: 'image/avif,image/webp,*/*',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: `http://${HOST}:${PORT}/cgi-bin/reservations.pl?page=welcome`,
        Cookie:
          `MSO=SID&1707745210; MTUserInfo=firstName&Jojo&address2&&username&${LOGIN}&hash&47&lastName&Bean%0A&address1&&creditCard&&expDate&%0A`,
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
      },
    });
    response = http.get(`http://${HOST}:${PORT}/WebTours/images/in_flights.gif`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept: 'image/avif,image/webp,*/*',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: `http://${HOST}:${PORT}/cgi-bin/nav.pl?page=menu&in=flights`,
        Cookie:
          `MSO=SID&1707745210; MTUserInfo=firstName&Jojo&address2&&username&${LOGIN}&hash&47&lastName&Bean%0A&address1&&creditCard&&expDate&%0A`,
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
      },
    });
    response = http.get(`http://${HOST}:${PORT}/WebTours/images/home.gif`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept: 'image/avif,image/webp,*/*',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: `http://${HOST}:${PORT}/cgi-bin/nav.pl?page=menu&in=flights`,
        Cookie:
          `MSO=SID&1707745210; MTUserInfo=firstName&Jojo&address2&&username&${LOGIN}&hash&47&lastName&Bean%0A&address1&&creditCard&&expDate&%0A`,
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
      },
    });
    response = http.get(`http://${HOST}:${PORT}/WebTours/images/itinerary.gif`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept: 'image/avif,image/webp,*/*',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Referer: `http://${HOST}:${PORT}/cgi-bin/nav.pl?page=menu&in=flights`,
      },
    });
    response = http.get(`http://${HOST}:${PORT}/WebTours/images/signoff.gif`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept: 'image/avif,image/webp,*/*',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Referer: `http://${HOST}:${PORT}/cgi-bin/nav.pl?page=menu&in=flights`,
      },
    });
  });

  // Automatically added sleep
  sleep(1);
}
