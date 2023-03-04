// register user

const User = require('../models/User');
const Cart = require('../models/Cart');

const register = async ({ username, password }) => {
  const user = new User({ username, password });
  const cart = new Cart();
  user.cart = cart;
  await user.save();
  await cart.save();
  return user;
};

module.exports = {
  register,
};
