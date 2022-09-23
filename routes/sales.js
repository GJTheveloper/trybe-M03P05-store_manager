const express = require('express');

const salesController = require('../controllers/sales');
const middQuantityUpdate = require('../middlewares/quantityUpdate');
const middSalesValidation = require('../middlewares/salesValidation');
const middExistingSales = require('../middlewares/existingSales');
const middQuantityValidation = require('../middlewares/quantityValidation');

const salesRouter = express.Router();

salesRouter.get('/', salesController.getAll);

salesRouter.get('/:id', salesController.getById);

salesRouter.delete(
  '/:id',
  middExistingSales,
  middQuantityUpdate.deleteSale,
  salesController.remove,
);

salesRouter.post(
  '/',
  middSalesValidation,
  middQuantityValidation,
  middQuantityUpdate.createSale,
  salesController.create,
);

salesRouter.put('/:id', middSalesValidation, salesController.update);

module.exports = salesRouter;
