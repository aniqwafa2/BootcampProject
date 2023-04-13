const route = require('express').Router();
const jokiRoute = require('./jokiRoute');
const userRoute = require('./userRoute');


route.use('/joki', jokiRoute);
route.use('/user', userRoute);


route.get('/', (req,res) => {
    res.send('home');
})

module.exports = route;