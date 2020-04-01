const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require('body-parser');

require('dotenv/config');

//Import routes 
const coinRoute = require('./routes/coins');
app.use(bodyParser.json());
app.use('/coins', coinRoute);


//Conect to MongoDB
mongoose.connect(process.env.DB_CONNECTION,
{ useUnifiedTopology: true, 
    useNewUrlParser: true }, () =>{ console.log('connected to db')
})

app.post('/bitcoin-history', (req, res) => {
    coinGeckoAPI.getBitcoinHist(req, res);
    res.sendStatus(200);
    // res.send(body);
  });

port = 8000;
app.listen(port, () => {
    console.log("Server is running on port " + port);
  });

