const db = require('../database/models');
const { validationResult } = require('express-validator');
const { Op } = require('sequelize');

const controller = {
    productos: function (req, res) {
        db.Product.findAll({
            include: [{ association: "usuario" }, { association: "comentarios" }]
        })
        .then(function (productos) {
            db.User.findByPk(1).then(function (usuario) {
                res.render('index', { productos: productos, usuario: usuario });
            });
        })
        .catch(function (error) {
            console.log(error);
            res.send("Ocurrió un error al mostrar los productos");
        });
    },

    productAdd: function (req, res) {
        db.User.findByPk(1).then(function (usuario) {
            res.render('product-add', { usuario: usuario });
        });
    },

    guardarProducto: function (req, res) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return db.User.findByPk(1).then(function (usuario) {
                res.render('product-add', { errors: errors.array(), usuario: usuario });
            });
        }

        db.Product.create({
            usuarioId: 1,
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

    searchResults: function (req, res) {
        let busqueda = req.query.search;

        db.Product.findAll({
            where: {
                nombre: { [Op.like]: '%' + busqueda + '%' }
            },
            include: [{ association: "usuario" }, { association: "comentarios" }]
        })
        .then(function (productos) {
            db.User.findByPk(1).then(function (usuario) {
                res.render('search-results', {
                    productos: productos,
                    busqueda: busqueda,
                    usuario: usuario
                });
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
            db.User.findByPk(1).then(function (usuario) {
                res.render('product', { producto: producto, usuario: usuario });
            });
        })
        .catch(function (error) {
            console.log(error);
            res.send("Error al buscar el producto");
        });
    }
};

module.exports = controller;
