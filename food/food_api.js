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

router.get('/main_areas', (req, res) =>{

    var state = req.query.state;
    console.log(state);
    const data = getMainArea(state);
    res.send(data);
});

router.get('/price', (req, res)=>{
    // 'http://localhost:8080/food_api/price/?area=tanke&location=kwara'
    // 'http://localhost:8080/food_api/price/?area=all&location=kwara'
    var areaName = req.query.area;
    var location = req.query.location;
    const data = getLocation(location, areaName);

    res.send(data);
});


router.get('/price_multiplier', (req, res)=>{
    res.send(foodData.price_multiplier);
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

// router.get('/food_delivery_info', (req, res)=>{
//     res.send(datafiles.food_delivery_price_info);
// });

function getMainArea(stateName) {
    if(stateName === 'kwara'){
        return foodData.kwara_main_area_names;
    }else{
        return ['NONE FOUND!!'];
    }
}

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
    }else if (area_name === 'all'){
        return {
            'taiwo': ilorinFoodData.taiwo,
            'tanke': ilorinFoodData.tanke,
        };
    }else{
        return {};
    }
}


module.exports = router;