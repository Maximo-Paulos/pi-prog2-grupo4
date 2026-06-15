const db = require('../database/models');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const userController = {
    register: function (req, res) {
        res.render('register');
    },
    login: function (req, res) {
        res.render('login');
    },
    profile: function (req, res) {
        db.User.findByPk(1, {
            include: [{ association: "productos", include: [{ association: "comentarios" }] }]
        })
        .then(function (usuario) {
            if (!usuario) {
                return res.send("Usuario no encontrado");
            }
            res.render('profile', { usuario: usuario, productos: usuario.productos });
        })
        .catch(function (error) {
            console.log(error);
            res.send("Error al cargar el perfil");
        });
    },
    perfil: function (req, res) {
        db.User.findByPk(req.params.id, {
            include: [{ association: "productos", include: [{ association: "comentarios" }] }]
        })
        .then(function (usuario) {
            if (!usuario) {
                return res.send("Usuario no encontrado");
            }
            res.render('profile', { usuario: usuario, productos: usuario.productos });
        })
        .catch(function (error) {
            console.log(error);
            res.send("Error al cargar el perfil");
        });
    },
    create: function (req, res) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.render('register', { errors: errors.array() });
        }

        db.User.findOne({ where: { email: req.body.email } })
        .then(function (usuarioExistente) {
            if (usuarioExistente) {
                return res.render('register', {
                    errors: [{ msg: 'Ese email ya está registrado' }]
                });
            }

            db.User.create({
                email: req.body.email,
                nombre: req.body.nombre,
                contrasenia: bcrypt.hashSync(req.body.contrasenia, 10)
            })
            .then(function () {
                res.redirect('/users/login');
            });
        })
        .catch(function (error) {
            console.log(error);
            res.send("Error al registrar el usuario");
        });
    }
};

module.exports = userController;
