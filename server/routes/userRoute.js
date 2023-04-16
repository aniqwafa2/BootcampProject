const {Router} = require('express');
const userRoute = Router();
const userController = require('../controllers/userController');
const { authenticationUser } = require('../midlewares/auth');
const uploadImage = require('../midlewares/uploadimage');


userRoute.get('/profile', authenticationUser,userController.detailUser);
userRoute.get('/order',authenticationUser, userController.listOrder);
userRoute.get('/detailorder/:id',authenticationUser, userController.detailOrder);
userRoute.get('/listpaket', userController.listPaket)
userRoute.delete('/order/:id',authenticationUser, userController.deleteOrder);

userRoute.put('/edit',authenticationUser,uploadImage.single('image'), userController.update);

userRoute.post('/login', userController.login);
userRoute.post('/create',uploadImage.single('image'), userController.create);
userRoute.post('/createorder/:id',authenticationUser, userController.createOrder);

userRoute.post('/upload', uploadImage.single('image'), userController.upload);


module.exports = userRoute;