const https = require('https');
https.get('https://en.wikipedia.org/wiki/Assam_University', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const match = data.match(/upload\.wikimedia\.org\/wikipedia\/[^"]+/);
    if(match) console.log('https://' + match[0]);
  });
});
