const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { body } = require('express-validator');

const validaciones = [
    body('imagen').notEmpty().withMessage('Debes completar la imagen'),

    body('nombre').notEmpty().withMessage('Debes completar el nombre del producto'),

    body('descripcion')
    .notEmpty().withMessage('Debes completar la descripción')
    .isLength({ min: 20 }).withMessage('La descripción debe tener al menos 20 caracteres'),
];

router.get('/', productController.productos);
router.get('/add', productController.productAdd);
router.post('/add', validaciones, productController.guardarProducto);
router.get('/search', productController.searchResults);
router.get('/edit/:id', productController.productEdit);
router.post('/edit/:id', validaciones, productController.actualizarProducto);
router.post('/delete/:id', productController.eliminarProducto);
router.get('/product/:id', productController.detalle);
router.post('/product/:id/comentario', productController.guardarComentario);


module.exports = router;
