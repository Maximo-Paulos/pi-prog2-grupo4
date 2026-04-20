const router = express.Router();
const express = require('express');

const userController = require('../controllers/userController');

router.get('/login', userController.login);
router.get('/register', userController.register);

module.exports = router;