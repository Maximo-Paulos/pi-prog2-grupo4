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
        // solo un usuario logueado puede ver el formulario de carga
        if (!req.session.user) {
            return res.redirect('/users/login');
        }
        return res.render('product-add');
    },

    guardarProducto: function (req, res) {
        // seguridad: si no esta logueado lo mando al login
        if (!req.session.user) {
            return res.redirect('/users/login');
        }

        const errors = validationResult(req);

        // si hay errores de validacion los devuelvo a la vista
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
