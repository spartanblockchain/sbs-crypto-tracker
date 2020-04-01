const request = require('request');
const moment = require('moment');

// this allows you to provide all the info that would otherwise go into the header
// it is better than concatenating a bunch of strings to make a frakenstein URL
var coinHistoryOptions = {

}

// 'coinGecko' is our JSON object that will only contain a bunch of a functions
// it gets exported at the bottom of this file and we can import in other files to access these request/calls
const coinGecko = {
  getBitcoinHist: (req, res) => {
    var weekDates = getPastWeek();
    // var date = moment().format('DD-MM-YYYY'); // gets today's date
    var date = weekDates[0];
    console.log("https://api.coingecko.com/api/v3/coins/bitcoin/history?date="+date+"&localization=false");
    request("https://api.coingecko.com/api/v3/coins/bitcoin/history?date="+date+"&localization=false", function (error, response, body) {
      if(error){
        console.error('error:', error); // Print the error if one occurred
      }
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

      // console.log('body:', body); // Print the HTML for the Google homepage.
      console.log(body.market_data);
    });
  }

}

// new functions can just be separated by commas
function getPastWeek(){
  // get us a list of the past week's worth of dates formatted (DD MM YYYY)
  var weekDates = [];
  for(var i=0; i<7; i++) {
    // weekDates.push(moment().subtract(i, 'days').format('DD-MM-YYYY'));
    pastDay = moment().subtract(i, 'days').format('DD-MM-YYYY');
    weekDates.push(pastDay);
  }
  // console.log(weekDates);
  return weekDates;
}

module.exports = coinGecko;