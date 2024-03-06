/* eslint-disable max-len */
/* eslint-disable no-useless-escape */
/*
 * Creator: Firefox 122.0.1
 * Browser: Firefox 122.0.1
 */

import { sleep, group } from 'k6';
import http from 'k6/http';
import { findBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import { SharedArray } from 'k6/data';
import exec from 'k6/execution';

import {
  DEPART_DATE,
  HOST,
  PORT,
  RETURN_DATE,
  getRandomParametr,
  getRandomDelay,
  getResponceLine,
} from './utils.js';

let USER_SESSION = '';
let DEPART_CITIES = [];
let DEPART_CITY = '';
let RETURN_CITY = '';
const NUM_PASSANGERS = 1;
let OUTBOUND_FLIGHT = '';
let RETURN_FLIGHT = '';

const SMALL_CONSTANT_DELAY = 0; // 1
const LONG_CONSTANT_DELAY = 0; // 3
const RANDOM_SMALL_CONSTANT_DELAY = getRandomDelay(75, 100, SMALL_CONSTANT_DELAY);
const RANDOM_LONG_CONSTANT_DELAY = getRandomDelay(75, 100, LONG_CONSTANT_DELAY);

let FLIGHTS_ID = [];
let RECPONCE_LINE_ID = '';
let CGI_FIELDS = [];
let RECPONCE_LINE_CGI_FIELDS = '';
let SEAT_PREF = [];
let SEAT_TYPE = [];
let RANDOM_SEAT_PREF = '';
let RANDOM_SEAT_TYPE = '';

const numSteps = 5;
const executor = 'ramping-arrival-rate';
const startRate = 1;
const timeUnit = '2s';
const preAllocatedVUs = 0;
const maxVUs = 100;
const rampupDuration = '5s';
const stageDuration = '5s';

const getStages = (numSteps, rampUpDuration, stageDuration) => {
  const stages = [];

  for (let i = 0; i <= numSteps; i += 1) {
    const target = i;
    stages.push({ target, duration: rampUpDuration });
    stages.push({ target, duration: stageDuration });
  }

  return stages;
};

export const options = {
  scenarios: {
    contacts: {
      executor,
      startRate,
      timeUnit,
      preAllocatedVUs,
      maxVUs,
      stages: getStages(numSteps, rampupDuration, stageDuration),
    },
  },
};

const USER_INFO_PARSE = new SharedArray('data', (() => {
  // eslint-disable-next-line no-restricted-globals
  const data = JSON.parse(open('./data/USER_INFO.json'));
  return data;
}));

export default function main() {
  // eslint-disable-next-line no-unused-vars
  let response;
  const vuID = exec.vu.idInTest;

  const {
    LOGIN,
    PASS,
    FIRST_NAME,
    LAST_NAME,
    ADRESS1,
    ADRESS2,
    PASSANGER_NAME,
    CREDIT_CARD,
    EXP_DATE,
  } = USER_INFO_PARSE[vuID];

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

  sleep(RANDOM_SMALL_CONSTANT_DELAY);

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
          `MSO=SID&1707745210; MTUserInfo=firstName&${FIRST_NAME}&address2&${ADRESS2}&username&${LOGIN}&hash&47&lastName&${LAST_NAME}%0A&address1&${ADRESS1}&creditCard&${CREDIT_CARD}&expDate&${EXP_DATE}%0A`,
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
          `MSO=SID&1707745210; MTUserInfo=firstName&${FIRST_NAME}&address2&${ADRESS2}&username&${LOGIN}&hash&47&lastName&${LAST_NAME}%0A&address1&${ADRESS1}&creditCard&${CREDIT_CARD}&expDate&${EXP_DATE}%0A`,
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
          `MSO=SID&1707745210; MTUserInfo=firstName&${FIRST_NAME}&address2&${ADRESS2}&username&${LOGIN}&hash&47&lastName&${LAST_NAME}%0A&address1&${ADRESS1}&creditCard&${CREDIT_CARD}&expDate&${EXP_DATE}%0A`,
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
          `MSO=SID&1707745210; MTUserInfo=firstName&${FIRST_NAME}&address2&${ADRESS2}&username&${LOGIN}&hash&47&lastName&${LAST_NAME}%0A&address1&${ADRESS1}&creditCard&${CREDIT_CARD}&expDate&${EXP_DATE}%0A`,
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
          `MSO=SID&1707745210; MTUserInfo=firstName&${FIRST_NAME}&address2&${ADRESS2}&username&${LOGIN}&hash&47&lastName&${LAST_NAME}%0A&address1&${ADRESS1}&creditCard&${CREDIT_CARD}&expDate&${EXP_DATE}%0A`,
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
          `MSO=SID&1707745210; MTUserInfo=firstName&${FIRST_NAME}&address2&${ADRESS2}&username&${LOGIN}&hash&47&lastName&${LAST_NAME}%0A&address1&${ADRESS1}&creditCard&${CREDIT_CARD}&expDate&${EXP_DATE}%0A`,
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
      },
    });
  });

  sleep(RANDOM_SMALL_CONSTANT_DELAY);

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
          `MSO=SID&1707745210; MTUserInfo=firstName&${FIRST_NAME}&address2&${ADRESS2}&username&${LOGIN}&hash&47&lastName&${LAST_NAME}%0A&address1&${ADRESS1}&creditCard&${CREDIT_CARD}&expDate&${EXP_DATE}%0A`,
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
          `MSO=SID&1707745210; MTUserInfo=firstName&${FIRST_NAME}&address2&${ADRESS2}&username&${LOGIN}&hash&47&lastName&${LAST_NAME}%0A&address1&${ADRESS1}&creditCard&${CREDIT_CARD}&expDate&${EXP_DATE}%0A`,
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
          `MSO=SID&1707745210; MTUserInfo=firstName&${FIRST_NAME}&address2&${ADRESS2}&username&${LOGIN}&hash&47&lastName&${LAST_NAME}%0A&address1&${ADRESS1}&creditCard&${CREDIT_CARD}&expDate&${EXP_DATE}%0A`,
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'frame',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
      },
    });

    // корреляция и поиск случайного города вылета, прилёта
    DEPART_CITIES = findBetween(response.body, '\n<option value=\"', '\">', true);

    if (DEPART_CITIES && DEPART_CITIES.length) {
      DEPART_CITY = getRandomParametr(DEPART_CITIES);
      RETURN_CITY = getRandomParametr(DEPART_CITIES);

      while (DEPART_CITY === RETURN_CITY) {
        DEPART_CITY = getRandomParametr(DEPART_CITIES);
      }
    } else {
      throw new Error('DEPART_CITIES not received!');
    }

    SEAT_PREF = findBetween(response.body, 'name="seatPref" value="', '" />', true);

    if (!SEAT_PREF) {
      throw new Error('SEAT_PREF not received!');
    }

    SEAT_TYPE = findBetween(response.body, 'name="seatType" value="', '" />', true);

    if (!findBetween) {
      throw new Error('SEAT_TYPE not received!');
    }

    RANDOM_SEAT_PREF = getRandomParametr(SEAT_PREF);
    RANDOM_SEAT_TYPE = getRandomParametr(SEAT_TYPE);

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
          `MSO=SID&1707745210; MTUserInfo=firstName&${FIRST_NAME}&address2&${ADRESS2}&username&${LOGIN}&hash&47&lastName&${LAST_NAME}%0A&address1&${ADRESS1}&creditCard&${CREDIT_CARD}&expDate&${EXP_DATE}%0A`,
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
          `MSO=SID&1707745210; MTUserInfo=firstName&${FIRST_NAME}&address2&${ADRESS2}&username&${LOGIN}&hash&47&lastName&${LAST_NAME}%0A&address1&${ADRESS1}&creditCard&${CREDIT_CARD}&expDate&${EXP_DATE}%0A`,
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
          `MSO=SID&1707745210; MTUserInfo=firstName&${FIRST_NAME}&address2&${ADRESS2}&username&${LOGIN}&hash&47&lastName&${LAST_NAME}%0A&address1&${ADRESS1}&creditCard&${CREDIT_CARD}&expDate&${EXP_DATE}%0A`,
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

  sleep(RANDOM_SMALL_CONSTANT_DELAY);

  // 04_Search_round_ticket
  group(`page_4 - http://${HOST}:${PORT}/webtours/`, () => {
    response = http.post(
      `http://${HOST}:${PORT}/cgi-bin/reservations.pl`,
      `advanceDiscount=0&depart=${DEPART_CITY}&departDate=${DEPART_DATE}&arrive=${RETURN_CITY}&returnDate=${RETURN_DATE}&numPassengers=${NUM_PASSANGERS}&roundtrip=on&seatPref=${RANDOM_SEAT_PREF}&seatType=${RANDOM_SEAT_TYPE}&findFlights.x=75&findFlights.y=8&.cgifields=roundtrip%2CseatType%2CseatPref`,
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
            `MSO=SID&1707745210; MTUserInfo=firstName&${FIRST_NAME}&address2&${ADRESS2}&username&${LOGIN}&hash&47&lastName&${LAST_NAME}%0A&address1&${ADRESS1}&creditCard&${CREDIT_CARD}&expDate&${EXP_DATE}%0A`,
          'Upgrade-Insecure-Requests': '1',
          'Sec-Fetch-Dest': 'frame',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'same-origin',
          'Sec-Fetch-User': '?1',
        },
      },
    );

    OUTBOUND_FLIGHT = findBetween(response.body, 'name="outboundFlight" value="', '" checked="checked"');

    if (!OUTBOUND_FLIGHT) {
      throw new Error('OUTBOUND_FLIGHT not received!');
    }

    RETURN_FLIGHT = findBetween(response.body, 'name="returnFlight" value="', '" checked="checked"');

    if (!RETURN_FLIGHT) {
      throw new Error('RETURN_FLIGHT not received!');
    }

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

  sleep(RANDOM_LONG_CONSTANT_DELAY);

  // 05_Select_results
  group(`page_5 - http://${HOST}:${PORT}/webtours/`, () => {
    response = http.post(
      `http://${HOST}:${PORT}/cgi-bin/reservations.pl`,
      {
        outboundFlight: OUTBOUND_FLIGHT,
        returnFlight: RETURN_FLIGHT,
        numPassengers: NUM_PASSANGERS,
        advanceDiscount: '0',
        seatType: RANDOM_SEAT_TYPE,
        seatPref: RANDOM_SEAT_PREF,
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
            `MSO=SID&1707745210; MTUserInfo=firstName&${FIRST_NAME}&address2&${ADRESS2}&username&${LOGIN}&hash&47&lastName&${LAST_NAME}%0A&address1&${ADRESS1}&creditCard&${CREDIT_CARD}&expDate&${EXP_DATE}%0A`,
          'Upgrade-Insecure-Requests': '1',
          'Sec-Fetch-Dest': 'frame',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'same-origin',
          'Sec-Fetch-User': '?1',
        },
      },
    );
  });

  sleep(RANDOM_LONG_CONSTANT_DELAY);

  // 06_1_Completing_booking
  group(`page_6 - http://${HOST}:${PORT}/webtours/`, () => {
    response = http.post(
      `http://${HOST}:${PORT}/cgi-bin/reservations.pl`,
      {
        firstName: FIRST_NAME,
        lastName: LAST_NAME,
        address1: ADRESS1,
        address2: ADRESS2,
        pass1: PASSANGER_NAME,
        creditCard: CREDIT_CARD,
        expDate: EXP_DATE,
        oldCCOption: '',
        numPassengers: NUM_PASSANGERS,
        seatType: RANDOM_SEAT_TYPE,
        seatPref: RANDOM_SEAT_PREF,
        outboundFlight: OUTBOUND_FLIGHT,
        advanceDiscount: '0',
        returnFlight: RETURN_FLIGHT,
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
            `MSO=SID&1707745210; MTUserInfo=firstName&${FIRST_NAME}&address2&${ADRESS2}&username&${LOGIN}&hash&47&lastName&${LAST_NAME}%0A&address1&${ADRESS1}&creditCard&${CREDIT_CARD}&expDate&${EXP_DATE}%0A`,
          'Upgrade-Insecure-Requests': '1',
          'Sec-Fetch-Dest': 'frame',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'same-origin',
          'Sec-Fetch-User': '?1',
        },
      },
    );

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
            `MSO=SID&1707745210; MTUserInfo=firstName&${FIRST_NAME}&username&${LOGIN}&address2&${ADRESS2}&hash&47&address1&${ADRESS1}&lastName&${LAST_NAME}%0A`,
          'Upgrade-Insecure-Requests': '1',
          'Sec-Fetch-Dest': 'frame',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'same-origin',
          'Sec-Fetch-User': '?1',
        },
      },
    );
  });

  sleep(RANDOM_LONG_CONSTANT_DELAY);

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
          `MSO=SID&1707745210; MTUserInfo=firstName&${FIRST_NAME}&username&${LOGIN}&address2&${ADRESS2}&hash&47&address1&${ADRESS1}&lastName&${LAST_NAME}%0A`,
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
          `MSO=SID&1707745210; MTUserInfo=firstName&${FIRST_NAME}&username&${LOGIN}&address2&${ADRESS2}&hash&47&address1&${ADRESS1}&lastName&${LAST_NAME}%0A`,
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
          `MSO=SID&1707745210; MTUserInfo=firstName&${FIRST_NAME}&username&${LOGIN}&address2&${ADRESS2}&hash&47&address1&${ADRESS1}&lastName&${LAST_NAME}%0A`,
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
          `MSO=SID&1707745210; MTUserInfo=firstName&${FIRST_NAME}&username&${LOGIN}&address2&${ADRESS2}&hash&47&address1&${ADRESS1}&lastName&${LAST_NAME}%0A`,
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
          `MSO=SID&1707745210; MTUserInfo=firstName&${FIRST_NAME}&username&${LOGIN}&address2&${ADRESS2}&hash&47&address1&${ADRESS1}&lastName&${LAST_NAME}%0A`,
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
      },
    });
  });

  sleep(RANDOM_SMALL_CONSTANT_DELAY);

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
          `MSO=SID&1707745210; MTUserInfo=firstName&${FIRST_NAME}&username&${LOGIN}&address2&${ADRESS2}&hash&47&address1&${ADRESS1}&lastName&${LAST_NAME}%0A`,
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
          `MSO=SID&1707745210; MTUserInfo=firstName&${FIRST_NAME}&username&${LOGIN}&address2&${ADRESS2}&hash&47&address1&${ADRESS1}&lastName&${LAST_NAME}%0A`,
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
          `MSO=SID&1707745210; MTUserInfo=firstName&${FIRST_NAME}&username&${LOGIN}&address2&${ADRESS2}&hash&47&address1&${ADRESS1}&lastName&${LAST_NAME}%0A`,
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'frame',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
      },
    });

    // получаем все id зарезервированных билетов
    FLIGHTS_ID = findBetween(response.body, 'name="flightID" value="', '"  />', true);

    if (!FLIGHTS_ID) {
      throw new Error('FLIGHTS_ID not received!');
    }

    CGI_FIELDS = findBetween(response.body, 'name=".cgifields" value="', '"  />', true);

    if (!CGI_FIELDS) {
      throw new Error('CGI_FIELDS not received!');
    }

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
          `MSO=SID&1707745210; MTUserInfo=firstName&${FIRST_NAME}&username&${LOGIN}&address2&${ADRESS2}&hash&47&address1&${ADRESS1}&lastName&${LAST_NAME}%0A`,
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
          `MSO=SID&1707745210; MTUserInfo=firstName&${FIRST_NAME}&username&${LOGIN}&address2&${ADRESS2}&hash&47&address1&${ADRESS1}&lastName&${LAST_NAME}%0A`,
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
          `MSO=SID&1707745210; MTUserInfo=firstName&${FIRST_NAME}&username&${LOGIN}&address2&${ADRESS2}&hash&47&address1&${ADRESS1}&lastName&${LAST_NAME}%0A`,
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

  sleep(RANDOM_SMALL_CONSTANT_DELAY);

  // // // 09_1_Deleting_reservations
  // group(`page_9 - http://${HOST}:${PORT}/webtours/`, () => {
  //   response = http.post(
  //     `http://${HOST}:${PORT}/cgi-bin/itinerary.pl`,
  //     {
  //       1: 'on',
  //       flightID: '246889677-92430-JB',
  //       'removeFlights.x': '70',
  //       'removeFlights.y': '14',
  //       '.cgifields': '1',
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
  //         Referer: `http://${HOST}:${PORT}/cgi-bin/itinerary.pl`,
  //         Cookie:
  //           `MSO=SID&1707745210; MTUserInfo=firstName&${FIRST_NAME}&username&${LOGIN}&address2&${ADRESS2}&hash&47&address1&${ADRESS1}&lastName&${LAST_NAME}%0A`,
  //         'Upgrade-Insecure-Requests': '1',
  //         'Sec-Fetch-Dest': 'frame',
  //         'Sec-Fetch-Mode': 'navigate',
  //         'Sec-Fetch-Site': 'same-origin',
  //         'Sec-Fetch-User': '?1',
  //       },
  //     },
  //   );
  // });

  // sleep(RANDOM_SMALL_CONSTANT_DELAY);

  // вебтурс может выдать ошибку и не удалить выбранную бронь
  // поэтому необходимо удалять все брони
  RECPONCE_LINE_ID = getResponceLine(FLIGHTS_ID, '%2C');
  RECPONCE_LINE_CGI_FIELDS = getResponceLine(CGI_FIELDS, '%2C');

  // 09_2_Deleting_reservations_all
  group(`page_6 - http://${HOST}:${PORT}/webtours/`, () => {
    response = http.post(
      `http://${HOST}:${PORT}/cgi-bin/itinerary.pl`,
      // 'flightID=24691373-135397-JB%2C753-1564-JB&removeAllFlights.x=64&removeAllFlights.y=9&.cgifields=1%2C2',
      `flightID=${RECPONCE_LINE_ID}&removeAllFlights.x=64&removeAllFlights.y=9&.cgifields=${RECPONCE_LINE_CGI_FIELDS}`,
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
          `MSO=SID&1707810977; MTUserInfo=hash&47&firstName&{FIRST_NAME}&lastName&${LAST_NAME}%0A&address1&${ADRESS1}&address2&${ADRESS2}&username&${LOGIN}`,
          'Upgrade-Insecure-Requests': '1',
          'Sec-Fetch-Dest': 'frame',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'same-origin',
          'Sec-Fetch-User': '?1',
        },
      },
    );
  });

  sleep(RANDOM_SMALL_CONSTANT_DELAY);

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
          `MSO=SID&1707745210; MTUserInfo=firstName&${FIRST_NAME}&username&${LOGIN}&address2&${ADRESS2}&hash&47&address1&${ADRESS1}&lastName&${LAST_NAME}%0A`,
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

  sleep(RANDOM_SMALL_CONSTANT_DELAY);
}
