const express = require('express');
const router = express.Router();
const datafiles = require('../data');
const locationData = require('../location/location_data');


router.get('/', (req, res)=>{
    res.send('On Location Api');
});

router.get('/places', (req, res)=>{
    const _locationName = req.query.location;
    const data = getLocation(_locationName)
    res.send(data);
});


function getLocation(locationName) {
    if(locationName === 'kwara'){
        return locationData.kwara_location;
    }else if (locationName === 'lagos'){
        return locationData.lagos_loctaion;
    }else{
        return ['No Location Found!'];
    }
}

module.exports = router;
