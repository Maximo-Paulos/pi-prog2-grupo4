const db = require('../database/models');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const userController = {
    profile: function (req, res) {
        if (!req.session.user) {
            return res.redirect('/users/login');
        }

        let idUsuario = req.session.user.id;

        db.User.findByPk(idUsuario, {
            include: [{ association: "productos", include: [{ association: "comentarios" }] }]
        })
            .then(function (usuario) {
                let misProductos = usuario.productos;
                return res.render('profile', { usuario: usuario, productos: misProductos });
            })
            .catch(function (error) {
                console.log(error);
                res.send("Error al cargar el perfil");
            });
    },

    perfil: function (req, res) {
        let id = req.params.id;
        db.User.findByPk(id, {
            include: [{ association: "productos", include: [{ association: "comentarios" }] }]
        })
            .then(function (usuario) {
                if (!usuario) {
                    return res.send("Usuario no encontrado");
                }
                return res.render('profile', { usuario: usuario, productos: usuario.productos });
            })
            .catch(function (error) {
                console.log(error);
                res.send("Error al cargar el perfil");
            });
    },

    register: function (req, res) {
        if (req.session.user != undefined) {
            return res.redirect('/users');
        }
        return res.render('register');
    },

    data: function (req, res) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.send(errors.array());
        }

        db.User.findOne({ where: { email: req.body.email } })
            .then(function (usuarioExistente) {
                if (usuarioExistente) {
                    return res.send("Ese email ya está registrado");
                }

                let passEncriptada = bcrypt.hashSync(req.body.contrasenia, 10);

                db.User.create({
                    email: req.body.email,
                    nombre: req.body.nombre,
                    contrasenia: passEncriptada
                })
                    .then(function () {
                        return res.redirect('/users/login');
                    });
            })
            .catch(function (error) {
                console.log(error);
                res.send("Error al registrar el usuario");
            });
    },

    login: function (req, res) {
        if (req.session.user != undefined) {
            return res.redirect('/users');
        }

        return res.render('login', { email: req.cookies.userEmail });
    },

    loginProceso: function (req, res) {
        db.User.findOne({ where: { email: req.body.email } })
            .then(function (usuario) {
                if (!usuario) {
                    return res.render('login', { error: "No existe el usuario" });
                }

                let passwordOk = bcrypt.compareSync(req.body.contrasenia, usuario.contrasenia);

                if (!passwordOk) {
                    return res.render('login', { error: "Contraseña incorrecta" });
                }

                req.session.user = {
                    id: usuario.id,
                    nombre: usuario.nombre,
                    email: usuario.email,
                    fotoPerfil: usuario.fotoPerfil
                };

                if (req.body.recordarme) {
                    res.cookie('userEmail', usuario.email, { maxAge: 1000 * 60 * 5 });
                }

                return res.redirect('/');
            })
            .catch(function (error) {
                console.log(error);
                res.send("Error al iniciar sesion");
            });
    },

    logout: function (req, res) {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }

};

module.exports = userController;
