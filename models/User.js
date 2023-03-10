// User model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: String,
  password: String,
  cart: { type: Schema.Types.ObjectId, ref: 'Cart' }, // reference to Cart model
});

const User = mongoose.model('User', userSchema);
module.exports = User;
