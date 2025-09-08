//productModel
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  category: String, 
  imageUrl: String,
  discountPercent: { type: Number, default: 0 },
  views: { type: Number, default: 0 }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
