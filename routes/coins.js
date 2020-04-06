const express = require('express');
const router = express.Router();
const Post = require('../models/Coins');

router.get('/', (req, res) => {
    //coinGeckoAPI.getCoinInfo(database, req,res);
    res.send('Default Page');
  });

router.get('/coin-info', (req, res) => {
    res.send('Coin info page')
})

router.post('/', (req, res) =>{
    console.log(req.body)
    const post = new Post({
        name: 'bitcoin',
        ticker: 'bitcoin',
        close : 4231412,
        volume : 2143, 
        market_cap : 15235, 
        max : 42314123, 
        min : 341234, 
        date : 01/21/1999
    })

    post.save()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.json({message: err});
    })
})
module.exports = router;