const mongoose = require('mongoose');

/// 

const CoinSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ticker: {
        type: String,
        required: true
    },
    close: {
        type: Number,
        required: true
    }, 
    volume: {
        type: Number,
        required: false
    },
    market_cap: {
        type: Number,
        required: false
    },
    max: {
        type: Number,
        required: false
    },
    min: {
        type: Number,
        required: false
    }, 
    date: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Coins', CoinSchema);