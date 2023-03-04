const express = require('express');
const cartController = require('../controllers/cart.controller.js');
const router = express.Router();

router.post('/', cartController.addProductToCart);
router.post('/get-carts', cartController.getCart);

module.exports = router;
