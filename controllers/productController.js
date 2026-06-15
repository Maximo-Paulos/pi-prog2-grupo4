const data = require('../localData/data');
const { validationResult } = require('express-validator');
const db = require('../database/models');

const controller = {
    productos: function (req, res) {
        res.render('index', { productos: data.productos, usuario: data.usuario });
    },
    productAdd: function (req, res) {
        res.render('product-add', { productos: data.productos, usuario: data.usuario })
    },
    productEdit: function (req, res) {
        res.render('product-edit', { productos: data.productos, usuario: data.usuario });
    },
    product: function (req, res) {
        res.render('product', { productos: data.productos, usuario: data.usuario });
    },
    guardarProducto: function (req, res) {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            let producto = {
                id: data.productos.length + 1,
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                imagen: '/images/' + req.body.imagen
            };
            data.productos.push(producto);
            res.redirect('/');
        } else {
            res.render('product-add', { errors: errors.array(), productos: data.productos, usuario: data.usuario });
        }
    },
    searchResults: function (req, res) {
        let busqueda = req.query.search;
        let resultados = [];

        for (let i = 0; i < data.productos.length; i++) {
            let nombreProducto = data.productos[i].nombre.toLowerCase();
            if (busqueda && nombreProducto.includes(busqueda.toLowerCase())) {
                resultados.push(data.productos[i]);
            }
        }
        res.render('search-results', { productos: resultados, busqueda: busqueda, usuario: data.usuario });
    },

    detalle: function (req, res) {
        const id = req.params.id;
        let producto;
        for (let i = 0; i < data.productos.length; i++) {
            if (data.productos[i].id == id) {
                producto = data.productos[i];
            }
        }
        res.render('product', { producto: producto, usuario: data.usuario });
    }
};

module.exports = controller;