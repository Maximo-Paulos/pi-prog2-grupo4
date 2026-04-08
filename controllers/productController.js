const productData = require('../db/data').productos;

const productController = {
    productos: (req, res) => { 
        res.render('index', { product: productData });
    }
};

module.exports = productController;