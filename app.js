const express = require('express')
const app =  express();
const hostelRoute = require('./hostel_api');
const foodRouter = require('./food/food_api');
const marketRouter = require('./market_api');
const hireRouter = require('./hire_api');
const files = require('./data')

app.use('/hostel_api', hostelRoute);
app.use('/food_api', foodRouter);
app.use('/market_api', marketRouter);
app.use('/hire_api', hireRouter);



app.get('/',(req, res)=>{
    res.send('Welcome');
});

app.get('/coin_fee',(req, res)=>{
    res.send(files.coin_fee);
});


// PORT
const port = process.env.port || 8080;

app.listen(port, () => console.log(`Listening on port ${port}`))
