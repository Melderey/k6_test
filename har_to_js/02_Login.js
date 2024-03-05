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

  group('page_2 - http://localhost:1080/webtours/', () => {
    response = http.post(
      'http://localhost:1080/cgi-bin/login.pl',
      {
        userSession: '138334.970433374HVVfzAfpAtVzzzzHtczQDpzDAcf',
        username: 'jojo',
        password: 'bean',
        'login.x': '59',
        'login.y': '13',
        JSFormSubmit: 'off',
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
          Referer: 'http://localhost:1080/cgi-bin/nav.pl?in=home',
          Cookie: 'MSO=SID&1707745210',
          'Upgrade-Insecure-Requests': '1',
          'Sec-Fetch-Dest': 'frame',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'same-origin',
          'Sec-Fetch-User': '?1',
        },
      },
    );

    response = http.get('http://localhost:1080/cgi-bin/nav.pl?page=menu&in=home', {
      headers: {
        Host: 'localhost:1080',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: 'http://localhost:1080/cgi-bin/login.pl',
        Cookie:
          'MSO=SID&1707745210; MTUserInfo=firstName&Jojo&address2&&username&jojo&hash&47&lastName&Bean%0A&address1&&creditCard&&expDate&%0A',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'frame',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
      },
    });

    response = http.get('http://localhost:1080/cgi-bin/login.pl?intro=true', {
      headers: {
        Host: 'localhost:1080',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: 'http://localhost:1080/cgi-bin/login.pl',
        Cookie:
          'MSO=SID&1707745210; MTUserInfo=firstName&Jojo&address2&&username&jojo&hash&47&lastName&Bean%0A&address1&&creditCard&&expDate&%0A',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'frame',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
      },
    });

    response = http.get('http://localhost:1080/WebTours/images/flights.gif', {
      headers: {
        Host: 'localhost:1080',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept: 'image/avif,image/webp,*/*',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: 'http://localhost:1080/cgi-bin/nav.pl?page=menu&in=home',
        Cookie:
          'MSO=SID&1707745210; MTUserInfo=firstName&Jojo&address2&&username&jojo&hash&47&lastName&Bean%0A&address1&&creditCard&&expDate&%0A',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
      },
    });

    response = http.get('http://localhost:1080/WebTours/images/itinerary.gif', {
      headers: {
        Host: 'localhost:1080',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept: 'image/avif,image/webp,*/*',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: 'http://localhost:1080/cgi-bin/nav.pl?page=menu&in=home',
        Cookie:
          'MSO=SID&1707745210; MTUserInfo=firstName&Jojo&address2&&username&jojo&hash&47&lastName&Bean%0A&address1&&creditCard&&expDate&%0A',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
      },
    });

    response = http.get('http://localhost:1080/WebTours/images/in_home.gif', {
      headers: {
        Host: 'localhost:1080',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept: 'image/avif,image/webp,*/*',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: 'http://localhost:1080/cgi-bin/nav.pl?page=menu&in=home',
        Cookie:
          'MSO=SID&1707745210; MTUserInfo=firstName&Jojo&address2&&username&jojo&hash&47&lastName&Bean%0A&address1&&creditCard&&expDate&%0A',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
      },
    });

    response = http.get('http://localhost:1080/WebTours/images/signoff.gif', {
      headers: {
        Host: 'localhost:1080',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept: 'image/avif,image/webp,*/*',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: 'http://localhost:1080/cgi-bin/nav.pl?page=menu&in=home',
        Cookie:
          'MSO=SID&1707745210; MTUserInfo=firstName&Jojo&address2&&username&jojo&hash&47&lastName&Bean%0A&address1&&creditCard&&expDate&%0A',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
      },
    });
  });

  // Automatically added sleep
  sleep(1);
}
