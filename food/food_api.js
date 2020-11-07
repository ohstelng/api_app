const express = require('express');
const router = express.Router();
const datafiles = require('../data');
const foodData = require('../food/food_data');
const ilorinFoodData = require('../food/ilorin_food_data');


router.get('/', (req, res)=>{
    res.send('On Food Api');
});

router.get('/all_food_location', (req, res)=>{
    res.send(foodData.all_food_location);
});

router.get('/kwara', (req, res) =>{
    console.log(req.query.main_area);
    res.send(foodData.kwara_location);
});

router.get('/main_areas', (req, res) =>{
    res.send(foodData.main_area_names);
});

router.get('/price', (req, res)=>{
    var areaName = req.query.area;
    var location = req.query.location;
    const data = getLocation(location, areaName);

    res.send(data);
});

///

router.get('/unilorin', (req, res)=>{
    res.send(datafiles.unilorin_area_name);
});

router.get('/unilag', (req, res)=>{
    res.send(datafiles.unilag_area_name);
});

router.get('/lasu', (req, res)=>{
    res.send(datafiles.Lasu_area_name);
});

router.get('/kwasu', (req, res)=>{
    res.send(datafiles.kwasu_area_name);
});

router.get('/kwaraploy', (req, res)=>{
    res.send(datafiles.kwaraPloy_area_name);
});

router.get('/funaab', (req, res)=>{
    res.send(datafiles.funaab_area_name);
});

router.get('/al-hikmah', (req, res)=>{
    res.send(datafiles.Al_Hikmah_area_name);
});

router.get('/food_delivery_info', (req, res)=>{
    res.send(datafiles.food_delivery_price_info);
});

function getLocation(location, area_name) {
    if(location === 'kwara'){
        return getIlorinAreaPrice(area_name);
    }else{
        return {};
    }
}

function getIlorinAreaPrice(area_name) {
    if(area_name === 'taiwo'){
        return ilorinFoodData.taiwo;
    }else if(area_name === 'tanke'){
        return ilorinFoodData.tanke;
    }else{
        return {};
    }
}


module.exports = router;