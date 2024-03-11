/* eslint-disable max-len */
/* eslint-disable no-useless-escape */
/*
 * Creator: Firefox 122.0.1
 * Browser: Firefox 122.0.1
 */

// Билдер вылетает с ошибками при вложенном импорте
import { sleep, group, check } from 'k6';
import http from 'k6/http';
import { findBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import { SharedArray } from 'k6/data';
import exec from 'k6/execution';

const USER_INFO = [
  {
    LOGIN: 'jojo1',
    PASS: 'bean1',
    FIRST_NAME: 'Jojo1',
    LAST_NAME: 'Bean1',
    ADRESS1: 'USA1',
    ADRESS2: 'Milan1',
    PASSANGER_NAME: 'Jojo Bean1',
    CREDIT_CARD: 123123121,
    EXP_DATE: '01/25',
  },
  {
    LOGIN: 'jojo2',
    PASS: 'bean2',
    FIRST_NAME: 'Jojo2',
    LAST_NAME: 'Bean2',
    ADRESS1: 'USA2',
    ADRESS2: 'Milan2',
    PASSANGER_NAME: 'Jojo Bean2',
    CREDIT_CARD: 123123122,
    EXP_DATE: '01/25',
  },
  {
    LOGIN: 'jojo3',
    PASS: 'bean3',
    FIRST_NAME: 'Jojo3',
    LAST_NAME: 'Bean3',
    ADRESS1: 'USA3',
    ADRESS2: 'Milan3',
    PASSANGER_NAME: 'Jojo Bean3',
    CREDIT_CARD: 123123123,
    EXP_DATE: '01/25',
  },
  {
    LOGIN: 'jojo4',
    PASS: 'bean4',
    FIRST_NAME: 'Jojo4',
    LAST_NAME: 'Bean4',
    ADRESS1: 'USA4',
    ADRESS2: 'Milan4',
    PASSANGER_NAME: 'Jojo Bean4',
    CREDIT_CARD: 123123124,
    EXP_DATE: '01/25',
  },
  {
    LOGIN: 'jojo5',
    PASS: 'bean5',
    FIRST_NAME: 'Jojo5',
    LAST_NAME: 'Bean5',
    ADRESS1: 'USA5',
    ADRESS2: 'Milan5',
    PASSANGER_NAME: 'Jojo Bean5',
    CREDIT_CARD: 123123125,
    EXP_DATE: '01/25',
  },
  {
    LOGIN: 'jojo6',
    PASS: 'bean6',
    FIRST_NAME: 'Jojo6',
    LAST_NAME: 'Bean6',
    ADRESS1: 'USA6',
    ADRESS2: 'Milan6',
    PASSANGER_NAME: 'Jojo Bean6',
    CREDIT_CARD: 123123126,
    EXP_DATE: '01/25',
  },
  {
    LOGIN: 'jojo7',
    PASS: 'bean7',
    FIRST_NAME: 'Jojo7',
    LAST_NAME: 'Bean7',
    ADRESS1: 'USA7',
    ADRESS2: 'Milan7',
    PASSANGER_NAME: 'Jojo Bean7',
    CREDIT_CARD: 123123127,
    EXP_DATE: '01/25',
  },
  {
    LOGIN: 'jojo8',
    PASS: 'bean8',
    FIRST_NAME: 'Jojo8',
    LAST_NAME: 'Bean8',
    ADRESS1: 'USA8',
    ADRESS2: 'Milan8',
    PASSANGER_NAME: 'Jojo Bean8',
    CREDIT_CARD: 123123128,
    EXP_DATE: '01/25',
  },
  {
    LOGIN: 'jojo9',
    PASS: 'bean9',
    FIRST_NAME: 'Jojo9',
    LAST_NAME: 'Bean9',
    ADRESS1: 'USA9',
    ADRESS2: 'Milan9',
    PASSANGER_NAME: 'Jojo Bean9',
    CREDIT_CARD: 123123129,
    EXP_DATE: '01/25',
  },
  {
    LOGIN: 'jojo10',
    PASS: 'bean10',
    FIRST_NAME: 'Jojo10',
    LAST_NAME: 'Bean10',
    ADRESS1: 'USA10',
    ADRESS2: 'Milan10',
    PASSANGER_NAME: 'Jojo Bean10',
    CREDIT_CARD: 123123130,
    EXP_DATE: '01/25',
  },
  {
    LOGIN: 'jojo10',
    PASS: 'bean10',
    FIRST_NAME: 'Jojo10',
    LAST_NAME: 'Bean10',
    ADRESS1: 'USA10',
    ADRESS2: 'Milan10',
    PASSANGER_NAME: 'Jojo Bean10',
    CREDIT_CARD: 123123130,
    EXP_DATE: '01/25',
  },
  {
    LOGIN: 'jojo11',
    PASS: 'bean11',
    FIRST_NAME: 'Jojo11',
    LAST_NAME: 'Bean11',
    ADRESS1: 'USA11',
    ADRESS2: 'Milan11',
    PASSANGER_NAME: 'Jojo Bean11',
    CREDIT_CARD: 123123131,
    EXP_DATE: '01/25',
  },
  {
    LOGIN: 'jojo12',
    PASS: 'bean12',
    FIRST_NAME: 'Jojo12',
    LAST_NAME: 'Bean12',
    ADRESS1: 'USA12',
    ADRESS2: 'Milan12',
    PASSANGER_NAME: 'Jojo Bean12',
    CREDIT_CARD: 123123132,
    EXP_DATE: '01/25',
  },
  {
    LOGIN: 'jojo13',
    PASS: 'bean13',
    FIRST_NAME: 'Jojo13',
    LAST_NAME: 'Bean13',
    ADRESS1: 'USA13',
    ADRESS2: 'Milan13',
    PASSANGER_NAME: 'Jojo Bean13',
    CREDIT_CARD: 123123133,
    EXP_DATE: '01/25',
  },
  {
    LOGIN: 'jojo14',
    PASS: 'bean14',
    FIRST_NAME: 'Jojo14',
    LAST_NAME: 'Bean14',
    ADRESS1: 'USA14',
    ADRESS2: 'Milan14',
    PASSANGER_NAME: 'Jojo Bean14',
    CREDIT_CARD: 123123134,
    EXP_DATE: '01/25',
  },
  {
    LOGIN: 'jojo15',
    PASS: 'bean15',
    FIRST_NAME: 'Jojo15',
    LAST_NAME: 'Bean15',
    ADRESS1: 'USA15',
    ADRESS2: 'Milan15',
    PASSANGER_NAME: 'Jojo Bean15',
    CREDIT_CARD: 123123135,
    EXP_DATE: '01/25',
  },
  {
    LOGIN: 'jojo16',
    PASS: 'bean16',
    FIRST_NAME: 'Jojo16',
    LAST_NAME: 'Bean16',
    ADRESS1: 'USA16',
    ADRESS2: 'Milan16',
    PASSANGER_NAME: 'Jojo Bean16',
    CREDIT_CARD: 123123136,
    EXP_DATE: '01/25',
  },
  {
    LOGIN: 'jojo17',
    PASS: 'bean17',
    FIRST_NAME: 'Jojo17',
    LAST_NAME: 'Bean17',
    ADRESS1: 'USA17',
    ADRESS2: 'Milan17',
    PASSANGER_NAME: 'Jojo Bean17',
    CREDIT_CARD: 123123137,
    EXP_DATE: '01/25',
  },
  {
    LOGIN: 'jojo18',
    PASS: 'bean18',
    FIRST_NAME: 'Jojo18',
    LAST_NAME: 'Bean18',
    ADRESS1: 'USA18',
    ADRESS2: 'Milan18',
    PASSANGER_NAME: 'Jojo Bean18',
    CREDIT_CARD: 123123138,
    EXP_DATE: '01/25',
  },
  {
    LOGIN: 'jojo19',
    PASS: 'bean19',
    FIRST_NAME: 'Jojo19',
    LAST_NAME: 'Bean19',
    ADRESS1: 'USA19',
    ADRESS2: 'Milan19',
    PASSANGER_NAME: 'Jojo Bean19',
    CREDIT_CARD: 123123139,
    EXP_DATE: '01/25',
  },
  {
    LOGIN: 'jojo20',
    PASS: 'bean20',
    FIRST_NAME: 'Jojo20',
    LAST_NAME: 'Bean20',
    ADRESS1: 'USA20',
    ADRESS2: 'Milan20',
    PASSANGER_NAME: 'Jojo Bean20',
    CREDIT_CARD: 123123140,
    EXP_DATE: '01/25',
  },
];

const padTo2Digits = (num) => num.toString().padStart(2, '0'); // Преобразует 9 в 09, а 10 оставит без изменений

const getFormatedDate = (date) => {
  const day = padTo2Digits(date.getDate());
  const month = padTo2Digits(date.getMonth() + 1);
  const year = date.getFullYear();

  return `${month}%2F${day}%2F${year}`;
};

const getRandomDate = (start, end) => {
  const randomDate = new Date(start.getTime()
          + Math.random() * (end.getTime() - start.getTime()));

  return randomDate;
};

const getRandomParametr = (parametrsArr = []) => {
  const max = parametrsArr.length;
  const parametrNum = Math.floor(Math.random() * max);

  return parametrsArr[parametrNum];
};

const getRandomDelay = (min, max, delay) => {
  const randomDelay = delay + (delay * (min + Math.floor(Math.random() * max))) / 100;
  return randomDelay;
};

const getResponceLine = (params, separator) => {
  const str = params.join(separator);
  return str;
};

// для локального запуска скрипта
// const HOST = 'localhost';

// для запуска скрипта в докере
const HOST = 'host.docker.internal';
const PORT = '1080';
const DEPART_DATE = getFormatedDate(new Date());
const RETURN_DATE = getRandomDate(new Date(), new Date(2025, 0, 1));

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
const rampupDuration = '1s';
const stageDuration = '60s';

const getStages = (numSteps, rampUpDuration, stageDuration) => {
  const stages = [];

  for (let i = 1; i <= numSteps; i += 1) {
    const target = i;
    stages.push({ target, duration: rampUpDuration });
    stages.push({ target, duration: stageDuration });
  }

  return stages;
};

const log = (name, value) => {
  console.log(name, value);
};

export const options = {
  thresholds: {
    // http errors should be less than 5%
    http_req_failed: [
      {
        threshold: 'rate<0.05',
        abortOnFail: true, // boolean
        delayAbortEval: '10s', // string
      },
    ],

    // 95% of requests should be below 20000ms
    http_req_duration: [
      {
        threshold: 'p(95)<20000',
        abortOnFail: true, // boolean
        delayAbortEval: '10s', // string
      },
    ],
  },

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
  // Билдер вылетает на виндовой машине с ошибками при вложенном импорте
  // eslint-disable-next-line no-restricted-globals
  // const data = JSON.parse(open('./data/USER_INFO.json'));

  const data = USER_INFO;
  return data;
}));

export default function main() {
  // eslint-disable-next-line no-unused-vars
  let response;
  const vuID = exec.vu.idInTest;
  log('vuID', vuID);

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

  log('LOGIN', LOGIN);

  group('01_Open_start_page', () => {
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

    log('USER_SESSION', USER_SESSION);

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

  group('02_Login', () => {
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

  group('03_Opening_tour_search_page', () => {
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
    log('DEPART_CITIES', DEPART_CITIES.toString());

    if (DEPART_CITIES && DEPART_CITIES.length) {
      DEPART_CITY = getRandomParametr(DEPART_CITIES);
      RETURN_CITY = getRandomParametr(DEPART_CITIES);

      while (DEPART_CITY === RETURN_CITY) {
        DEPART_CITY = getRandomParametr(DEPART_CITIES);
      }
    } else {
      throw new Error('DEPART_CITIES not received!');
    }

    log('DEPART_CITY', DEPART_CITY);
    log('RETURN_CITY', RETURN_CITY);

    SEAT_PREF = findBetween(response.body, 'name="seatPref" value="', '" />', true);

    if (!SEAT_PREF) {
      throw new Error('SEAT_PREF not received!');
    }

    SEAT_TYPE = findBetween(response.body, 'name="seatType" value="', '" />', true);

    if (!SEAT_TYPE) {
      throw new Error('SEAT_TYPE not received!');
    }

    RANDOM_SEAT_PREF = getRandomParametr(SEAT_PREF);
    RANDOM_SEAT_TYPE = getRandomParametr(SEAT_TYPE);

    log('RANDOM_SEAT_PREF', RANDOM_SEAT_PREF);
    log('RANDOM_SEAT_PREF', RANDOM_SEAT_PREF);

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

  group('04_Search_round_ticket', () => {
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

    log('OUTBOUND_FLIGHT', OUTBOUND_FLIGHT);
    log('RETURN_FLIGHT', RETURN_FLIGHT);

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

  group('05_Select_results', () => {
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

  group('06_Completing_booking', () => {
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

  group('07_Go_home_page', () => {
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

  group('08_Opening_reservations', () => {
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

    log('FLIGHTS_ID', FLIGHTS_ID.toString());
    log('CGI_FIELDS', CGI_FIELDS.toString());

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

  // вебтурс может выдать ошибку и не удалить выбранную бронь
  // поэтому необходимо удалять все брони
  RECPONCE_LINE_ID = getResponceLine(FLIGHTS_ID, '%2C');
  RECPONCE_LINE_CGI_FIELDS = getResponceLine(CGI_FIELDS, '%2C');

  group('09_Deleting_reservations', () => {
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

  group('10_Logout', () => {
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

  check(response, {
    'is response status 200': (r) => r.status === 200,
  });
}

// export function handleSummary(data) {
//   // можно записать конкретную метрику
//   // const med_latency = data.metrics.iteration_duration.values.med;
//   // const latency_message = `The median latency was ${med_latency}\n`;

//   return {
//     stdout_text_summary: JSON.stringify(data),
//   };
// }
