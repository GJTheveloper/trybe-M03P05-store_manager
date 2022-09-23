const productService = require('../services/products');
const validationService = require('../services/validation');

const quantityValidation = async (req, res, next) => {
  try {
    const quantityErrorsPromises = req.body.map(async (itemSold) => {
      const product = await productService.getById(itemSold.productId);
      return validationService.quantityValidation(
        itemSold.quantity,
        product.quantity,
      );
    });
    const quantityErrors = await Promise.all(quantityErrorsPromises);
    const quantityError = quantityErrors.find((error) => error);
    if (quantityError) {
      return res.status(quantityError.code).json({ message: quantityError.message });
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = quantityValidation;
