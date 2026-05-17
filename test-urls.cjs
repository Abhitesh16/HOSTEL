const https = require('https');
https.get('https://upload.wikimedia.org/wikipedia/en/2/2f/Assam_University_logo.png', (res) => {
  console.log('Status 1:', res.statusCode);
});
https.get('https://upload.wikimedia.org/wikipedia/en/1/1b/Assam_University_Logo.png', (res) => {
  console.log('Status 2:', res.statusCode);
});
