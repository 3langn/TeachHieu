// index route

const express = require('express');
const router = express.Router();

router.use('/products', require('./product.route'));
router.use('/users', require('./user.route'));
router.use('/carts', require('./cart.route'));

module.exports = router;
