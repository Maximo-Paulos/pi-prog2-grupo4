const product = require('../db/data');

const controller = {
    productos: function (req, res) {
        res.render('index', { productos: product.productos });
    }
};

const detalleProducto = {
    detalles: function (req, res) {
        res.render('add');
    }
};

module.exports = controller;