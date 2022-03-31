const express = require('express');
const router = express.Router();
const productController = require('../controllers/product-controller')

router.post('/', productController.createProduct)
router.get('/', productController.getProducts)
router.get('/:id', productController.getProduct)
router.delete('/:id', productController.deleteProduct)
router.put('/:id', productController.updateProduct)

module.exports = router;