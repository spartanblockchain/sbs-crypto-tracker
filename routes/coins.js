const express = require('express');
const router = express.Router();
const Coins = require('../models/databaseSchema');
const coinGecko = require("../coinGecko.api");

router.get('/', (req, res) => {
    //coinGeckoAPI.getCoinInfo(database, req,res);
    res.send('Default Page');
  });


// need to do get request at 'coins/get_last30'
// Gets you the last 30 entries into the database 
router.get('/get_last30', (req, res) => {
    Coins.
    find({}).
    where("name").equals('bitcoin').
    select('name ticker close volume max min market_cap date').
    limit(30).
    exec(function(err, result ) {
        if(err) return handleError(err);
        
        console.log(result)
        // for (i = 0; i < result.length ; i ++){
        //     console.log('%s %s %s %s %s', result[i].name, result[i].ticker, result[i].close, result[i].volume, result[i].max);
        // }
    })
    
    res.sendStatus(200)
})


router.post('/', (req, res) =>{
    // Puts the information into our database 
    Coins.create(
        {
        name: parsed[0].name,
        close : parsed[0].last,
        volume : parsed[0].total_supply, 
        market_cap : parsed[0].market_cap, 
        max : parsed[0].high_24h, 
        min : parsed[0].low_24h, 
        date : parsed[0].last_updated
        },
        function(err){
            if(err) handleError(res);
        })
        resolve();
    res.sendStatus(200);
})
module.exports = router;