const db = require('../database/models');
const { validationResult } = require('express-validator');
const { Op } = require('sequelize');

const controller = {
    productos: function (req, res) {
        db.Product.findAll({
            include: [{ association: "usuario" }, { association: "comentarios" }]
        })
        .then(function (productos) {
            res.render('index', { productos: productos });
        })
        .catch(function (error) {
            console.log(error);
            res.send("Ocurrió un error al mostrar los productos");
        });
    },

    productAdd: function (req, res) {
        if (!req.session.user) {
            return res.redirect('/users/login');
        }
        return res.render('product-add');
    },

    guardarProducto: function (req, res) {
        if (!req.session.user) {
            return res.redirect('/users/login');
        }

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.render('product-add', { errors: errors.array() });
        }

        db.Product.create({
            usuarioId: req.session.user.id,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            imagen: req.body.imagen
        })
        .then(function () {
            res.redirect('/');
        })
        .catch(function (error) {
            console.log(error);
            res.send("Ocurrió un error al cargar el producto");
        });
    },

    productEdit: function (req, res) {
        if (!req.session.user) {
            return res.redirect('/users/login');
        }

        db.Product.findByPk(req.params.id)
        .then(function (producto) {
            if (!producto) {
                return res.send("Producto no encontrado");
            }
            if (producto.usuarioId != req.session.user.id) {
                return res.redirect('/');
            }
            return res.render('product-edit', { producto: producto });
        })
        .catch(function (error) {
            console.log(error);
            res.send("Error al buscar el producto");
        });
    },

    actualizarProducto: function (req, res) {
        if (!req.session.user) {
            return res.redirect('/users/login');
        }

        db.Product.findByPk(req.params.id)
        .then(function (producto) {
            if (!producto) {
                return res.send("Producto no encontrado");
            }
            if (producto.usuarioId != req.session.user.id) {
                return res.redirect('/');
            }

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.send(errors.array());
            }

            db.Product.update({
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                imagen: req.body.imagen
            }, {
                where: { id: req.params.id }
            })
            .then(function () {
                res.redirect('/products/product/' + req.params.id);
            })
            .catch(function (error) {
                console.log(error);
                res.send("Ocurrió un error al editar el producto");
            });
        })
        .catch(function (error) {
            console.log(error);
            res.send("Error al buscar el producto");
        });
    },

    searchResults: function (req, res) {
        let busqueda = req.query.search;

        db.Product.findAll({
            where: {
                nombre: { [Op.like]: '%' + busqueda + '%' }
            },
            include: [{ association: "usuario" }, { association: "comentarios" }]
        })
        .then(function (productos) {
            res.render('search-results', {
                productos: productos,
                busqueda: busqueda
            });
        })
        .catch(function (error) {
            console.log(error);
            res.send("Error al buscar productos");
        });
    },

    detalle: function (req, res) {
        let idProducto = req.params.id;

        db.Product.findByPk(idProducto, {
            include: [
                { association: "comentarios", include: [{ association: "usuario" }] },
                { association: "usuario" }
            ]
        })
        .then(function (producto) {
            if (!producto) {
                return res.send("Producto no encontrado");
            }
            res.render('product', { producto: producto });
        })
        .catch(function (error) {
            console.log(error);
            res.send("Error al buscar el producto");
        });
    }
};

module.exports = controller;
