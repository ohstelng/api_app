const express = require('express');
const router = express.Router()
const files = require('./data')


router.get('/', (req, res)=>{
    res.send('On Hostel Api');
});

router.get('/searchKeys',(req, res)=>{
    res.send(files.search_key_hostel);
});

router.get('/all_sub_locations', (req, res)=>{
    res.send(files.all_location);
});



module.exports = router;
