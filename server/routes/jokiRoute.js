const { Router } = require('express');
const jokiRoute = Router();
const jokiController = require('../controllers/jokiController');
const { authenticationJoki } = require('../midlewares/auth');
const uploadImage = require('../midlewares/uploadimage');

jokiRoute.get('/profile',authenticationJoki, jokiController.detailJoki);
jokiRoute.get('/order',authenticationJoki, jokiController.listPaket);
jokiRoute.get('/detailpaket/:id',authenticationJoki, jokiController.detailPaket);
jokiRoute.get('/paketordered/:id', jokiController.listPaketOrdered);

jokiRoute.delete('/paket/:id',authenticationJoki, jokiController.deletePaket);

jokiRoute.put('/edit',authenticationJoki, jokiController.update);

jokiRoute.post('/login', jokiController.login);
jokiRoute.post('/create', jokiController.create);
jokiRoute.post('/createpaket/:id',authenticationJoki, jokiController.createPaket);





module.exports = jokiRoute;