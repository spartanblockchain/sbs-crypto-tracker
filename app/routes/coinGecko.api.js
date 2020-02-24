const request = require('request');
const moment = require('moment');

const coinGecko = {
  getBitcoinHist: (req, res) => {
    var data = "";
    request("https://api.coingecko.com/api/v3/coins/bitcoin/history?date=30-12-2017&localization=false", function (error, response, body) {
      console.error('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
    });
  }

}

module.exports = coinGecko;