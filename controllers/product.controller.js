// product controller

const productService = require('../services/product.service.js');

// create new product
// @CreateProductDto
const createProduct = async (req, res, next) => {
  try {
    const newProduct = await productService.createProduct(req);
    res.status(200).json({
      message: 'create product successfully',
      data: newProduct,
    });
  } catch (error) {
    next(error);
  }
};

const getPagingProducts = async (req, res, next) => {
  try {
    const products = await productService.getPagingProducts(req);
    res.status(200).json({
      message: 'get products successfully',
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

const getOneProduct = async (req, res, next) => {
  try {
    const product = await productService.getOneProduct(req.params.id);

    res.status(200).json({
      message: 'get product successfully',
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    await productService.updateProduct(req.params.id, req);
    res.status(200).json({
      message: 'update product successfully',
    });
  } catch (error) {
    next(error);
  }
};

// export function
module.exports = {
  createProduct,
  getPagingProducts,
  getOneProduct,
  updateProduct,
};
