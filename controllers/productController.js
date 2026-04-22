const data = require('../localData/data');

const controller = {
    productos: function (req, res) {
        res.render('index', { productos: data.productos, usuario: data.usuario });
    },
     productAdd: function (req, res) {
        res.render('product-add', { productos: data.productos, usuario: data.usuario });
    },
     productEdit: function (req, res) {
        res.render('product-edit', { productos: data.productos, usuario: data.usuario });
    },
     product: function (req, res) {
        res.render('product', { productos: data.productos, usuario: data.usuario });
    },
    
    searchResults: function (req, res) {
        res.render('search-results', { productos: data.productos, usuario: data.usuario });
    },

    detalle: function (req, res) {
        const id = req.params.id;
        let producto;
        for (let i = 0; i < data.productos.length; i++) {
            if (data.productos[i].id == id) {
                producto = data.productos[i];
            }
        }
        res.render('product', { producto: producto, usuario: data.usuario  });
    }
};

module.exports = controller;