const product = require('../db/data');

const controller = {
    productos: function (req, res) {
        res.render('index', { productos: product.productos });
    }
};


module.exports = controller;