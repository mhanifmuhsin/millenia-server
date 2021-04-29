const router = require('express').Router();
const multer = require('multer');
const { route } = require('../../app');
const userController = require('./controller');

router.get('/user', userController.index);
router.get('/user/:id', userController.findById);
router.post('/user', multer().none(), userController.store);
router.put('/user/:id', multer().none(), userController.update);
router.delete('/user/:id', userController.destroy);

module.exports = router;