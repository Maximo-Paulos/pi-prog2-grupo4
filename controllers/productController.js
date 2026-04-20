const data = require('../db/data');

const controller = {
    productos: function (req, res) {
        res.render('index', { productos: data.productos });
    },
    detalle: function (req, res) {
        const id = req.params.id;
        let producto;
        for (let i = 0; i < data.productos.length; i++) {
            if (data.productos[i].id == id) {
                producto = data.productos[i];
            }
        }
        res.render('product', { producto: producto });
    }
};

module.exports = controller;