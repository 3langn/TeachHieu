// Cart model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cartSchema = new Schema({
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }], // reference to Product model
  total: Number,
  user: { type: Schema.Types.ObjectId, ref: 'User' }, // reference to User model
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
