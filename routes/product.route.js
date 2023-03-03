const express = require('express');
const productController = require('../controllers/product.controller.js');
const router = express.Router();

router.post('/', productController.createProduct);
router.get('/', productController.getPagingProducts);
router.get('/:id', productController.getOneProduct);
router.put('/:id', productController.updateProduct);

// put vs patch

module.exports = router;
