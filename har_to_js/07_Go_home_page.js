/*
 * Creator: Firefox 122.0.1
 * Browser: Firefox 122.0.1
 */

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {}

export default function main() {
  let response

  group('page_7 - http://localhost:1080/webtours/', function () {
    response = http.get('http://localhost:1080/cgi-bin/welcome.pl?page=menus', {
      headers: {
        Host: 'localhost:1080',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Referer: 'http://localhost:1080/cgi-bin/nav.pl?page=menu&in=flights',
        Cookie:
          'MSO=SID&1707745210; MTUserInfo=firstName&Jojo&username&jojo&address2&&hash&47&address1&&lastName&Bean%0A',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'frame',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-User': '?1',
      },
    })
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
        Referer: 'http://localhost:1080/cgi-bin/welcome.pl?page=menus',
        Cookie:
          'MSO=SID&1707745210; MTUserInfo=firstName&Jojo&username&jojo&address2&&hash&47&address1&&lastName&Bean%0A',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'frame',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
      },
    })
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
        Referer: 'http://localhost:1080/cgi-bin/welcome.pl?page=menus',
        Cookie:
          'MSO=SID&1707745210; MTUserInfo=firstName&Jojo&username&jojo&address2&&hash&47&address1&&lastName&Bean%0A',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'frame',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
      },
    })
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
          'MSO=SID&1707745210; MTUserInfo=firstName&Jojo&username&jojo&address2&&hash&47&address1&&lastName&Bean%0A',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
      },
    })
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
          'MSO=SID&1707745210; MTUserInfo=firstName&Jojo&username&jojo&address2&&hash&47&address1&&lastName&Bean%0A',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
      },
    })
  })

  // Automatically added sleep
  sleep(1)
}
