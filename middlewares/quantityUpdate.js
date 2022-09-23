const productService = require('../services/products');
const salesService = require('../services/sales');

const createSale = (req, res, next) => {
  try {
    const sale = req.body;
    sale.forEach(async ({ productId, quantity }) => {
      await productService.removeQuantity(productId, quantity);
    });
    next();
  } catch (error) {
    next(error);
  }
};

const deleteSale = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sale = await salesService.getById(id);

    sale.forEach(async ({ productId, quantity }) => {
      await productService.addQuantity(productId, quantity);
    });

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createSale,
  deleteSale,
};
