const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.productos);

router.get('/register', function (req, res) {
    res.redirect('/users/register');
});

module.exports = router;
