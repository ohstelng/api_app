const express = require('express');
const router = express.Router()
const files = require('./data')


router.get('/', (req, res)=>{
    res.send('On Hire Api');
});


router.get('/unilorin',(req, res)=>{
    res.send(files.hire_laundry_deilvery_fee);
});



module.exports = router;