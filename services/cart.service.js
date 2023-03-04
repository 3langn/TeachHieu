// Add product to cart
const User = require('../models/User');
const Product = require('../models/Product');
const Cart = require('../models/Cart');
const addToCart = async (product_id, user_id) => {
  const user = await User.findById('6403620455b86beb2f90fec5'); // user_id
  if (!user) {
    throw new Error('User not found');
  }

  const product = await Product.findById(product_id); // product_id
  if (!product) {
    throw new Error('Product not found');
  }

  const userCart = await Cart.findById(user.cart);

  userCart.products.push(product._id);
  userCart.total += product.price;
  await userCart.save();
};

const getCart = async (user_id) => {
  const user = await User.findById(user_id);

  if (!user) {
    throw new Error('User not found');
  }

  const cart = await Cart.findById(user.cart).populate('products');
  if (!cart) {
    throw new Error('Cart not found');
  }
  return cart;
};

// Delete product in cart

module.exports = {
  addToCart,
  getCart,
};
