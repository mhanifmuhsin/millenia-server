const router = require('express').Router();
const multer = require('multer');
const { route } = require('../../app');
const barangController = require('./controller');

router.get('/barang', barangController.index);
router.get('/barang/:id', barangController.findById);
router.post('/barang', multer().none(), barangController.store);
router.put('/barang/:id', multer().none(), barangController.update);
router.delete('/barang/:id', barangController.destroy);

module.exports = router;