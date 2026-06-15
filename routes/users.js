var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const {body} = require('express-validator');

const validaciones = [
    body('email')
        .notEmpty().withMessage('El email es requerido')
        .bail()
        .isEmail().withMessage('El email no es válido'),
    body('nombre').notEmpty().withMessage('El nombre es requerido'),
    body('contrasenia').isLength({min: 3}).withMessage('La contraseña debe tener al menos 3 caracteres'),
];


router.get('/', userController.profile);
router.get('/perfil/:id', userController.perfil);
router.get('/login', userController.login);
router.get('/register', userController.register);
router.post('/register', validaciones, userController.create);

module.exports = router;
