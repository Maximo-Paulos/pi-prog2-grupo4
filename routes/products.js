const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');


router.get('/', productController.productos);
router.get('/add', productController.productos);
router.get('/product/:id', productController.detalle);


module.exports = router;
