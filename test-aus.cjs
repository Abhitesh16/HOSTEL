const https = require('https');
const http = require('http');

http.get('http://www.aus.ac.in/', (res) => {
  let data = '';
  res.on('data', (c) => data += c);
  res.on('end', () => {
    const urls = data.match(/http:\/\/[^"]+\.png/g);
    console.log(urls);
  });
});
