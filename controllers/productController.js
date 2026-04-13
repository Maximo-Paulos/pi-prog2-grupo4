const productData = require('../db/data').productos;
const commentsData = require('../db/data').comments;

const productController = {
    productos: function (req, res) { 
        const productosConComentarios = [];

        for (let j = 0; j < productData.length; j++) {
            const producto = productData[j];
            let cantidadComentarios = 0;

            for (let i = 0; i < commentsData.length; i++) {
                if (commentsData[i].id === producto.id) {
                    cantidadComentarios++;
                }
            }

            productosConComentarios.push({
                id: producto.id,
                name: producto.name,
                description: producto.description,
                comentarios: cantidadComentarios
            });
        }

        res.render('index', { product: productosConComentarios });
    },
    add: function (req, res) {
        res.render('product-add');
    }
};

module.exports = productController;