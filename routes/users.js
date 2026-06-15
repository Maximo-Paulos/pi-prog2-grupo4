var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const {body} = require('express-validator');
const db = require('../database/models');

const validaciones = [
    body('email')
        .notEmpty().withMessage('El email es requerido')
        .bail()
        .isEmail().withMessage('El email no es válido')
        .bail()
        // chequeo que el email no este ya registrado en la base
        .custom(function (value) {
            return db.User.findOne({ where: { email: value } })
                .then(function (usuario) {
                    if (usuario) {
                        return Promise.reject('Ese email ya está registrado');
                    }
                });
        }),
    body('nombre').notEmpty().withMessage('El nombre es requerido'),
    body('contrasenia').isLength({min: 3}).withMessage('La contraseña debe tener al menos 3 caracteres'),
];


router.get('/', userController.profile);
router.get('/perfil/:id', userController.perfil);
router.get('/login', userController.login);
router.post('/login', userController.loginProceso);
router.get('/logout', userController.logout);
router.get('/register', userController.register);
router.post('/register', validaciones, userController.data);

module.exports = router;
