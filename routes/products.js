const express = require('express');

const productController = require('../controllers/products');
const middProductsValidation = require('../middlewares/productsValidation');
const middRegisteredProducts = require('../middlewares/registeredProducts');
const middExistingProducts = require('../middlewares/existingProducts');

const routesProducts = express.Router();

routesProducts.get('/', productController.getAll);

routesProducts.get('/:id', middExistingProducts, productController.getById);

routesProducts.delete('/:id', middExistingProducts, productController.remove);

routesProducts.post(
  '/',
  middProductsValidation,
  middRegisteredProducts,
  productController.create,
);

routesProducts.put(
  '/:id',
  middProductsValidation,
  middExistingProducts,
  productController.update,
);

module.exports = routesProducts;
