const express = require('express');
const request = require('request');
const moment = require('moment');
const bodyParser = require('body-parser');
const Post = require('./models/databaseSchema');

// 'coinGecko' is our JSON object that will only contain a bunch of a functions
// it gets exported at the bottom of this file and we can import in other files to access these request/calls
const coinGecko = {
  getCurrentBitcoinStats: () => {
    // var coin = getCoin();
    var coin = 'bitcoin'
    request("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids="+coin+"&order=market_cap_desc&per_page=100&page=1&sparkline=false", function (error, response, body) {
      if(error){
        console.error('error:', error); // Print the error if one occurred
      }
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

      //console.log(bodyParser.json(body));
//      console.log(JSON.parse(body));
      const parsed = JSON.parse(body);   
      return parsed;
      
      });
  },

  getBitcoinHist: (req, res, date) => {
    // This will only return the prices/market_cap of each day from 2020-01-01 through 2020-04-05
    var start_date = moment().unix(1577836800);   // 2020-01-01
    var end_date = moment(date).format('X');          // gets current date
    request("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1577836800&to=1586044800", function(error, response, body) {
      if(error){
        console.error('error:', error); // Print the error if one occurred
      }
      return body;
      // console.log("start:",start_date, "end:",end_date);
      // console.log(body);
    })
  },

  getEthHist: (req, res, date) => {
    // This will only return the prices/market_cap of each day from 2020-01-01 through 2020-04-05
    var start_date = moment().unix(1577836800);   // 2020-01-01
    var end_date = moment(date).format('X');          // gets current date
    request("https://api.coingecko.com/api/v3/coins/ethereum/market_chart/range?vs_currency=usd&from=1577836800&to=1586044800", function(error, response, body) {
      if(error){
        console.error('error:', error); // Print the error if one occurred
      }
      return body;
      // console.log("start:",start_date, "end:",end_date);
      // console.log(body);
    })
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

function getCoin(){
  return self.coin();
}


module.exports = coinGecko;
