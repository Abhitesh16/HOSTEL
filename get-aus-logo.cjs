const http = require('http');
const options = {
  hostname: 'www.aus.ac.in',
  path: '/',
  headers: { 'User-Agent': 'Mozilla/5.0' }
};
http.get(options, (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => console.log(data.match(/http[^"]+logo[^"]*\.(png|jpg)/i)));
});
