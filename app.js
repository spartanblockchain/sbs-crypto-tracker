const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

// CoinGecko API
const coinGeckoAPI = require('./app/routes/coinGecko.api')

const app = express();

const port = 8000;




app.post('/bitcoin-history', (req, res) => {
  coinGeckoAPI.getBitcoinHist(req, res);
  res.sendStatus(200);
});

app.post('/coin-info', (req, res) => {
  coinGeckoAPI.getCoinInfo(req,res);
  res.sendStatus(200);
});




app.listen(port, () => {
  console.log("Server is running on port " + port);
});