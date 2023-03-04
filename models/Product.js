// Product Model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
  name: String,
  price: Number,
  quantity: Number,
  carts: [{ type: Schema.Types.ObjectId, ref: 'Cart' }], // reference to Cart model
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
