const request = require('request');

const GithubClient = {
  BASE_URL: 'https://api.github.com',
  fetch: function (url, {headers}) {
    request.get(url, function(err, res, body) {
      if(!err && res.statusCode == 200) {
        let payload = JSON.parse(body);
        return payload;
      }
    });
  }
};

module.exports = GithubClient;
