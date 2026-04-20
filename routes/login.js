const router = express.Router();
const express = require('express');

router.get('/login', userController.login);
router.get('/register', userController.register);

module.exports = router;