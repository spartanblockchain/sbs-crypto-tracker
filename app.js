const express       = require("express");
const mongoose      = require("mongoose");
const app           = express();
const bodyParser    = require('body-parser');
const coinGeckoAPI  = require('./coinGecko.api');
const request       = require('request');
require('dotenv/config');

//Import routes 
const coinRoute = require('./routes/coins');
app.use(bodyParser.json());
app.use('/coins', coinRoute);

 
//Conect to MongoDB
mongoose.connect(process.env.DB_CONNECTION,
{ useUnifiedTopology: true, 
    useNewUrlParser: true }, () =>{ console.log('connected to db');
})

// Homepage for express app
app.get('/', (req, res) => {
  handleRequest(req, res);
});

// bitcoin api endpoint
app.post('/bitcoin-history', (req, res) => {
    coinGeckoAPI.getBitcoinHist('2020-04-05');
    res.sendStatus(200);
  });

// ethereum api endpoint
app.post('/ethereum-history', (req, res) => {
    coinGeckoAPI.getEthHist('2020-04-05');
    res.sendStatus(200);
});

app.get('/bitcoin-price', (req, res) => {
    request("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd", function(err, res, body) {
        if(error){
            console.error('error:', error); // Print the error if one occurred
        } else {
            res.send(body);
        }
    })
});

port = 8000;
app.listen(port, () => {
    console.log("Server is running on port " + port);
  });


let fs    = require('fs');
let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./html/index.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            response.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
  
  
};