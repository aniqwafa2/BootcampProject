const {Router} = require('express');
const userRoute = Router();
const userController = require('../controllers/userController');


userRoute.get('/order',userController.listOrder);
userRoute.get('/detailorder/:id', userController.detailOrder);

userRoute.delete('/order/:id',userController.deleteOrder);

userRoute.put('/edit', userController.update);

userRoute.post('/login', userController.login);
userRoute.post('/create', userController.create);
userRoute.post('/createorder/:id', userController.createOrder);




module.exports = userRoute;