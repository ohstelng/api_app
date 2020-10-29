const express = require('express');
const router = express.Router()
const files = require('./data')


router.get('/', (req, res)=>{
    res.send('On Hostel Api');
});

router.get('/searchKeys',(req, res)=>{
    res.send(files.search_key_hostel);
});

// router.get('/unilorin',(req, res)=>{
//     res.send(files.unilorin_sub_Location);
// });

// router.get('/kwaraploy',(req, res)=>{
//     res.send(files.kwara_poly_sub_Location);
// });

// router.get('/unilag',(req, res)=>{
//     res.send(files.unilag_sub_Location);
// });

// router.get('/lasu',(req, res)=>{
//     res.send(files.lasu_sub_Location);
// });

// router.get('/funaab',(req, res)=>{
//     res.send(files.funaab_sub_Location);
// });


router.get('/all_sub_locations', (req, res)=>{
    res.send(files.all_location);
});



module.exports = router;
