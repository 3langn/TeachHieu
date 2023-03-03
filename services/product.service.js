//  service xử lý logic
const Product = require('../models/Product.js');

// create new product
// @CreateProductDto
const createProduct = async (req) => {
  if (req.body) {
    const product = new Product(req.body);
    try {
      const newProduct = await product.save(); // lưu vô db
      return newProduct;
    } catch (err) {
      throw err;
    }
  }
};

const getPagingProducts = async (req) => {
  const { page, limit } = req.query;
  const options = {
    page: parseInt(page, 10) || 1,
    limit: parseInt(limit, 10) || 10,
    sort: { createdAt: -1 }, // -1: descending, 1: ascending
  };

  try {
    const products = await Product.find()
      .limit(options.limit)
      .skip(options.limit * (options.page - 1))
      .sort(options.sort);
    return products;
  } catch (err) {
    throw err;
  }
};

// get one product
const getOneProduct = async (id) => {
  try {
    const product = await Product.findById(id);
    return product;
  } catch (error) {
    throw error;
  }
};

const updateProduct = async (id, req) => {
  const { name, price, quantity } = req.body;
  try {
    await Product.updateOne(
      {
        _id: id,
      },
      {
        name,
        price,
        quantity,
      }
    );
  } catch (error) {
    throw error;
  }
};
// export function
module.exports = {
  createProduct,
  getPagingProducts,
  getOneProduct,
  updateProduct,
};
