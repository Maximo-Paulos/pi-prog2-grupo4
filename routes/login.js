const router = express.Router();
const express = require('express');
const userController = require('../controllers/productController');

router.get('/login', userController.login);
router.get('/register', userController.register);

module.exports = router;