const express = require('express');
const router = express.Router()
const files = require('./data')

router.get('/', (req, res)=>{
    res.send('Om market Api');
});

router.get('/eee', (req, res)=>{
    res.send('Om market Api ee');
});


router.get('/deliveryInfo', (req, res)=>{
    res.send(files.market_delivery_info);
});



module.exports = router;