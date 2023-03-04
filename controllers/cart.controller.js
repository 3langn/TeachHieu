const cartService = require('../services/cart.service.js');

const addProductToCart = async (req, res, next) => {
  try {
    const { product_id } = req.body;
    // const { user_id } = req.user;
    await cartService.addToCart(product_id, null);
    res.status(200).json({
      message: 'Add product to cart successfully',
    });
  } catch (error) {
    next(error);
  }
};

const getCart = async (req, res, next) => {
  try {
    const { user_id } = req.user;
    const cart = await cartService.getCart(user_id);
    res.status(200).json({
      message: 'Get cart successfully',
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  addProductToCart,
  getCart,
};
