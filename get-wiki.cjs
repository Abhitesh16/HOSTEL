const https = require('https');
https.get({
  hostname: 'en.wikipedia.org',
  path: '/wiki/Assam_University',
  headers: { 'User-Agent': 'Mozilla/5.0' }
}, (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const urls = data.match(/upload\.wikimedia\.org\/[^\s"']+/ig);
    if(urls) {
      urls.forEach(u => console.log(u));
    }
  });
});
