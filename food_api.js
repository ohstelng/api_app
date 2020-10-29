const express = require('express');
const router = express.Router()
const files = require('./data')


router.get('/', (req, res)=>{
    res.send('On Food Api');
});

router.get('/unilorin', (req, res)=>{
    res.send(files.unilorin_area_name);
});

router.get('/unilag', (req, res)=>{
    res.send(files.unilag_area_name);
});

router.get('/lasu', (req, res)=>{
    res.send(files.Lasu_area_name);
});

router.get('/al-hikmah', (req, res)=>{
    res.send(files.Al_Hikmah_area_name);
});

router.get('/food_delivery_info', (req, res)=>{
    res.send(files.food_delivery_price_info);
});



module.exports = router;