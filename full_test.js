/* eslint-disable max-len */
/* eslint-disable no-useless-escape */
/*
 * Creator: Firefox 122.0.1
 * Browser: Firefox 122.0.1
 */

import { sleep, group } from 'k6';
import http from 'k6/http';
import { findBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

import {
  DEPART_DATE, HOST, LOGIN, PASS, PORT, RETURN_DATE, getRandomCity,
} from './utils.js';

let USER_SESSION = '';
let DEPART_CITIES = [];
let DEPART_CITY = '';
let RETURN_CITY = '';

export const options = {};

export default function main() {
  // eslint-disable-next-line no-unused-vars
  let response;

  // 01_Open_start_page
  group(`page_1 - http://${HOST}:${PORT}/webtours/`, () => {
    response = http.get(`http://${HOST}:${PORT}/webtours/`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Cookie: 'MSO=SID&1707745192',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
      },
    });
    response = http.get(`http://${HOST}:${PORT}/webtours/header.html`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: `http://${HOST}:${PORT}/webtours/`,
        Cookie: 'MSO=SID&1707745192',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'frame',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
      },
    });
    response = http.get(`http://${HOST}:${PORT}/favicon.ico`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept: 'image/avif,image/webp,*/*',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: `http://${HOST}:${PORT}/webtours/`,
        Cookie: 'MSO=SID&1707745192',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
      },
    });
    response = http.get(`http://${HOST}:${PORT}/cgi-bin/welcome.pl?signOff=true`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: `http://${HOST}:${PORT}/webtours/`,
        Cookie: 'MSO=SID&1707745192',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'frame',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
      },
    });
    response = http.get(`http://${HOST}:${PORT}/cgi-bin/nav.pl?in=home`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: `http://${HOST}:${PORT}/cgi-bin/welcome.pl?signOff=true`,
        Cookie: 'MSO=SID&1707745210',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'frame',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
      },
    });

    USER_SESSION = findBetween(response.body, '"userSession\" value=\"', '\"/>');

    if (!USER_SESSION) {
      throw new Error('USER_SESSION not received!');
    }

    response = http.get(`http://${HOST}:${PORT}/WebTours/home.html`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: `http://${HOST}:${PORT}/cgi-bin/welcome.pl?signOff=true`,
        Cookie: 'MSO=SID&1707745210',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'frame',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
      },
    });
  });

  // Automatically added sleep
  sleep(1);

  // 02_Login
  group(`page_2 - http://${HOST}:${PORT}/webtours/`, () => {
    response = http.post(
      `http://${HOST}:${PORT}/cgi-bin/login.pl`,
      {
        userSession: USER_SESSION,
        username: LOGIN,
        password: PASS,
        'login.x': '59',
        'login.y': '13',
        JSFormSubmit: 'off',
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
          Referer: `http://${HOST}:${PORT}/cgi-bin/nav.pl?in=home`,
          Cookie: 'MSO=SID&1707745210',
          'Upgrade-Insecure-Requests': '1',
          'Sec-Fetch-Dest': 'frame',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'same-origin',
          'Sec-Fetch-User': '?1',
        },
      },
    );

    response = http.get(`http://${HOST}:${PORT}/cgi-bin/nav.pl?page=menu&in=home`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: `http://${HOST}:${PORT}/cgi-bin/login.pl`,
        Cookie:
          `MSO=SID&1707745210; MTUserInfo=firstName&Jojo&address2&&username&${LOGIN}&hash&47&lastName&Bean%0A&address1&&creditCard&&expDate&%0A`,
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'frame',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
      },
    });

    response = http.get(`http://${HOST}:${PORT}/cgi-bin/login.pl?intro=true`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: `http://${HOST}:${PORT}/cgi-bin/login.pl`,
        Cookie:
          `MSO=SID&1707745210; MTUserInfo=firstName&Jojo&address2&&username&${LOGIN}&hash&47&lastName&Bean%0A&address1&&creditCard&&expDate&%0A`,
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'frame',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
      },
    });

    response = http.get(`http://${HOST}:${PORT}/WebTours/images/flights.gif`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept: 'image/avif,image/webp,*/*',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: `http://${HOST}:${PORT}/cgi-bin/nav.pl?page=menu&in=home`,
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
        Connection: 'keep-alive',
        Referer: `http://${HOST}:${PORT}/cgi-bin/nav.pl?page=menu&in=home`,
        Cookie:
          `MSO=SID&1707745210; MTUserInfo=firstName&Jojo&address2&&username&${LOGIN}&hash&47&lastName&Bean%0A&address1&&creditCard&&expDate&%0A`,
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
      },
    });

    response = http.get(`http://${HOST}:${PORT}/WebTours/images/in_home.gif`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept: 'image/avif,image/webp,*/*',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: `http://${HOST}:${PORT}/cgi-bin/nav.pl?page=menu&in=home`,
        Cookie:
          `MSO=SID&1707745210; MTUserInfo=firstName&Jojo&address2&&username&${LOGIN}&hash&47&lastName&Bean%0A&address1&&creditCard&&expDate&%0A`,
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
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
        Connection: 'keep-alive',
        Referer: `http://${HOST}:${PORT}/cgi-bin/nav.pl?page=menu&in=home`,
        Cookie:
          `MSO=SID&1707745210; MTUserInfo=firstName&Jojo&address2&&username&${LOGIN}&hash&47&lastName&Bean%0A&address1&&creditCard&&expDate&%0A`,
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
      },
    });
  });

  // Automatically added sleep
  sleep(1);

  // 03_Opening_tour_search_page
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

    // корреляция и поиск случайного города вылета, прилёта
    DEPART_CITIES = findBetween(response.body, '\n<option value=\"', '\">', true);

    if (DEPART_CITIES && DEPART_CITIES.length) {
      DEPART_CITY = getRandomCity(DEPART_CITIES);
      RETURN_CITY = getRandomCity(DEPART_CITIES);

      while (DEPART_CITY === RETURN_CITY) {
        DEPART_CITY = getRandomCity(DEPART_CITIES);
      }
    } else {
      throw new Error('DEPART_CITIES not received!');
    }

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
  // 04_Search_round_ticket
  group(`page_4 - http://${HOST}:${PORT}/webtours/`, () => {
    response = http.post(
      `http://${HOST}:${PORT}/cgi-bin/reservations.pl`,
      `advanceDiscount=0&depart=${DEPART_CITY}&departDate=${DEPART_DATE}&arrive=${RETURN_CITY}&returnDate=${RETURN_DATE}&numPassengers=1&roundtrip=on&seatPref=None&seatType=Coach&findFlights.x=75&findFlights.y=8&.cgifields=roundtrip%2CseatType%2CseatPref`,
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

  // 05_Select_results
  group(`page_5 - http://${HOST}:${PORT}/webtours/`, () => {
    response = http.post(
      `http://${HOST}:${PORT}/cgi-bin/reservations.pl`,
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
            `MSO=SID&1707745210; MTUserInfo=firstName&Jojo&address2&&username&${LOGIN}&hash&47&lastName&Bean%0A&address1&&creditCard&&expDate&%0A`,
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

  // 06_1_Completing_booking
  // group(`page_6 - http://${HOST}:${PORT}/webtours/`, () => {
  //   response = http.post(
  //     `http://${HOST}:${PORT}/cgi-bin/reservations.pl`,
  //     {
  //       firstName: 'Jojo',
  //       lastName: 'Bean',
  //       address1: 'Milan',
  //       address2: '123',
  //       pass1: 'Jojo Bean',
  //       creditCard: '6666666666',
  //       expDate: '01/25',
  //       oldCCOption: '',
  //       numPassengers: '1',
  //       seatType: 'Coach',
  //       seatPref: 'None',
  //       outboundFlight: '021;301;02/13/2024',
  //       advanceDiscount: '0',
  //       returnFlight: '201;301;03/14/2024',
  //       JSFormSubmit: 'off',
  //       'buyFlights.x': '82',
  //       'buyFlights.y': '6',
  //       '.cgifields': 'saveCC',
  //     },
  //     {
  //       headers: {
  //         Host: `${HOST}:${PORT}`,
  //         'User-Agent':
  //           'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
  //         Accept:
  //           'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
  //         'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
  //         'Accept-Encoding': 'gzip, deflate, br',
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //         Origin: `http://${HOST}:${PORT}`,
  //         Connection: 'keep-alive',
  //         Referer: `http://${HOST}:${PORT}/cgi-bin/reservations.pl`,
  //         Cookie:
  //           `MSO=SID&1707745210; MTUserInfo=firstName&Jojo&address2&&username&${LOGIN}&hash&47&lastName&Bean%0A&address1&&creditCard&&expDate&%0A`,
  //         'Upgrade-Insecure-Requests': '1',
  //         'Sec-Fetch-Dest': 'frame',
  //         'Sec-Fetch-Mode': 'navigate',
  //         'Sec-Fetch-Site': 'same-origin',
  //         'Sec-Fetch-User': '?1',
  //       },
  //     },
  //   );

  //   response = http.post(
  //     `http://${HOST}:${PORT}/cgi-bin/reservations.pl`,
  //     {
  //       'Book Another.x': '75',
  //       'Book Another.y': '11',
  //     },
  //     {
  //       headers: {
  //         Host: `${HOST}:${PORT}`,
  //         'User-Agent':
  //           'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
  //         Accept:
  //           'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
  //         'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
  //         'Accept-Encoding': 'gzip, deflate, br',
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //         Origin: `http://${HOST}:${PORT}`,
  //         Connection: 'keep-alive',
  //         Referer: `http://${HOST}:${PORT}/cgi-bin/reservations.pl`,
  //         Cookie:
  //           `MSO=SID&1707745210; MTUserInfo=firstName&Jojo&username&${LOGIN}&address2&&hash&47&address1&&lastName&Bean%0A`,
  //         'Upgrade-Insecure-Requests': '1',
  //         'Sec-Fetch-Dest': 'frame',
  //         'Sec-Fetch-Mode': 'navigate',
  //         'Sec-Fetch-Site': 'same-origin',
  //         'Sec-Fetch-User': '?1',
  //       },
  //     },
  //   );
  // });

  // Automatically added sleep
  // sleep(1);

  // 06_2_Completing_booking_all
  group(`page_6 - http://${HOST}:${PORT}/webtours/`, () => {
    response = http.post(
      `http://${HOST}:${PORT}/cgi-bin/itinerary.pl`,
      'flightID=0-7-JB%2C753-1564-JB&removeAllFlights.x=65&removeAllFlights.y=12&.cgifields=1%2C2',
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
            `MSO=SID&1707810977; MTUserInfo=hash&47&firstName&Jojo&lastName&Bean%0A&address1&&address2&&username&${LOGIN}`,
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

  // 07_Go_home_page
  group(`page_7 - http://${HOST}:${PORT}/webtours/`, () => {
    response = http.get(`http://${HOST}:${PORT}/cgi-bin/welcome.pl?page=menus`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: `http://${HOST}:${PORT}/cgi-bin/nav.pl?page=menu&in=flights`,
        Cookie:
          `MSO=SID&1707745210; MTUserInfo=firstName&Jojo&username&${LOGIN}&address2&&hash&47&address1&&lastName&Bean%0A`,
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'frame',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-User': '?1',
      },
    });
    response = http.get(`http://${HOST}:${PORT}/cgi-bin/nav.pl?page=menu&in=home`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: `http://${HOST}:${PORT}/cgi-bin/welcome.pl?page=menus`,
        Cookie:
          `MSO=SID&1707745210; MTUserInfo=firstName&Jojo&username&${LOGIN}&address2&&hash&47&address1&&lastName&Bean%0A`,
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'frame',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
      },
    });
    response = http.get(`http://${HOST}:${PORT}/cgi-bin/login.pl?intro=true`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: `http://${HOST}:${PORT}/cgi-bin/welcome.pl?page=menus`,
        Cookie:
          `MSO=SID&1707745210; MTUserInfo=firstName&Jojo&username&${LOGIN}&address2&&hash&47&address1&&lastName&Bean%0A`,
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'frame',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
      },
    });
    response = http.get(`http://${HOST}:${PORT}/WebTours/images/flights.gif`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept: 'image/avif,image/webp,*/*',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: `http://${HOST}:${PORT}/cgi-bin/nav.pl?page=menu&in=home`,
        Cookie:
          `MSO=SID&1707745210; MTUserInfo=firstName&Jojo&username&${LOGIN}&address2&&hash&47&address1&&lastName&Bean%0A`,
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
      },
    });
    response = http.get(`http://${HOST}:${PORT}/WebTours/images/in_home.gif`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept: 'image/avif,image/webp,*/*',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: `http://${HOST}:${PORT}/cgi-bin/nav.pl?page=menu&in=home`,
        Cookie:
          `MSO=SID&1707745210; MTUserInfo=firstName&Jojo&username&${LOGIN}&address2&&hash&47&address1&&lastName&Bean%0A`,
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
      },
    });
  });

  // Automatically added sleep
  sleep(1);

  // 08_Opening_reservations
  group(`page_8 - http://${HOST}:${PORT}/webtours/`, () => {
    response = http.get(`http://${HOST}:${PORT}/cgi-bin/welcome.pl?page=itinerary`, {
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
          `MSO=SID&1707745210; MTUserInfo=firstName&Jojo&username&${LOGIN}&address2&&hash&47&address1&&lastName&Bean%0A`,
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'frame',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-User': '?1',
      },
    });
    response = http.get(`http://${HOST}:${PORT}/cgi-bin/nav.pl?page=menu&in=itinerary`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: `http://${HOST}:${PORT}/cgi-bin/welcome.pl?page=itinerary`,
        Cookie:
          `MSO=SID&1707745210; MTUserInfo=firstName&Jojo&username&${LOGIN}&address2&&hash&47&address1&&lastName&Bean%0A`,
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'frame',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
      },
    });
    response = http.get(`http://${HOST}:${PORT}/cgi-bin/itinerary.pl`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: `http://${HOST}:${PORT}/cgi-bin/welcome.pl?page=itinerary`,
        Cookie:
          `MSO=SID&1707745210; MTUserInfo=firstName&Jojo&username&${LOGIN}&address2&&hash&47&address1&&lastName&Bean%0A`,
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'frame',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
      },
    });
    response = http.get(`http://${HOST}:${PORT}/WebTours/images/cancelreservation.gif`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept: 'image/avif,image/webp,*/*',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: `http://${HOST}:${PORT}/cgi-bin/itinerary.pl`,
        Cookie:
          `MSO=SID&1707745210; MTUserInfo=firstName&Jojo&username&${LOGIN}&address2&&hash&47&address1&&lastName&Bean%0A`,
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
      },
    });
    response = http.get(`http://${HOST}:${PORT}/WebTours/images/cancelallreservations.gif`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept: 'image/avif,image/webp,*/*',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: `http://${HOST}:${PORT}/cgi-bin/itinerary.pl`,
        Cookie:
          `MSO=SID&1707745210; MTUserInfo=firstName&Jojo&username&${LOGIN}&address2&&hash&47&address1&&lastName&Bean%0A`,
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
      },
    });
    response = http.get(`http://${HOST}:${PORT}/WebTours/images/in_itinerary.gif`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept: 'image/avif,image/webp,*/*',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: `http://${HOST}:${PORT}/cgi-bin/nav.pl?page=menu&in=itinerary`,
        Cookie:
          `MSO=SID&1707745210; MTUserInfo=firstName&Jojo&username&${LOGIN}&address2&&hash&47&address1&&lastName&Bean%0A`,
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
      },
    });
    response = http.get(`http://${HOST}:${PORT}/WebTours/images/flights.gif`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept: 'image/avif,image/webp,*/*',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Referer: `http://${HOST}:${PORT}/cgi-bin/nav.pl?page=menu&in=itinerary`,
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
        Referer: `http://${HOST}:${PORT}/cgi-bin/nav.pl?page=menu&in=itinerary`,
      },
    });
  });

  // Automatically added sleep
  sleep(1);

  // 09_Deleting_reservations
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

  // 10_Logout
  group(`page_10 - http://${HOST}:${PORT}/webtours/`, () => {
    response = http.get(`http://${HOST}:${PORT}/cgi-bin/welcome.pl?signOff=1`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: `http://${HOST}:${PORT}/cgi-bin/nav.pl?page=menu&in=itinerary`,
        Cookie:
          `MSO=SID&1707745210; MTUserInfo=firstName&Jojo&username&${LOGIN}&address2&&hash&47&address1&&lastName&Bean%0A`,
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'frame',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-User': '?1',
      },
    });
    response = http.get(`http://${HOST}:${PORT}/cgi-bin/nav.pl?in=home`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: `http://${HOST}:${PORT}/cgi-bin/welcome.pl?signOff=1`,
        Cookie: 'MSO=SID&1707745513',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'frame',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
      },
    });
    response = http.get(`http://${HOST}:${PORT}/WebTours/home.html`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: `http://${HOST}:${PORT}/cgi-bin/welcome.pl?signOff=1`,
        Cookie: 'MSO=SID&1707745513',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'frame',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
      },
    });
    response = http.get(`http://${HOST}:${PORT}/WebTours/images/mer_login.gif`, {
      headers: {
        Host: `${HOST}:${PORT}`,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept: 'image/avif,image/webp,*/*',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: `http://${HOST}:${PORT}/cgi-bin/nav.pl?in=home`,
        Cookie: 'MSO=SID&1707745513',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
      },
    });
  });

  // Automatically added sleep
  sleep(1);
}
