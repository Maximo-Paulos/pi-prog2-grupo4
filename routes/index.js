const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const userController = require('../controllers/userController');

router.get('/', productController.productos);
router.get('/login', userController.login);
router.get('/register', userController.register);

module.exports = router;
