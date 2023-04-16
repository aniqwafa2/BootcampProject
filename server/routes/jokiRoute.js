const { Router } = require('express');
const jokiRoute = Router();
const jokiController = require('../controllers/jokiController');
const { authenticationJoki } = require('../midlewares/auth');
const uploadImage = require('../midlewares/uploadimage');

jokiRoute.get('/profile',authenticationJoki, jokiController.detailJoki);
jokiRoute.get('/paket',authenticationJoki, jokiController.listPaket);
jokiRoute.get('/detailpaket/:id', jokiController.detailPaket);
jokiRoute.get('/paketordered',authenticationJoki, jokiController.listPaketOrdered);

jokiRoute.delete('/paket/:id',authenticationJoki, jokiController.deletePaket);

jokiRoute.put('/edit',authenticationJoki,uploadImage.single('image'), jokiController.update);

jokiRoute.post('/login', jokiController.login);
jokiRoute.post('/create', uploadImage.single('image'),jokiController.create);
jokiRoute.post('/createpaket',authenticationJoki,uploadImage.single('image'), jokiController.createPaket);

module.exports = jokiRoute;