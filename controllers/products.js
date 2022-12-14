const productService = require('../services/products');

const HTTP_OK = 200;
const HTTP_CREATED = 201;
const HTTP_NO_CONTENT = 204;

const getAll = async (_req, res, next) => {
  try {
    const result = await productService.getAll();
    return res.status(HTTP_OK).json(result);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await productService.getById(+id);
    return res.status(HTTP_OK).json(result);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const { name, quantity } = req.body;
    const createdProduct = await productService.create(name, quantity);
    return res.status(HTTP_CREATED).json(createdProduct);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, quantity } = req.body;
    await productService.update(+id, name, quantity);
    return res.status(HTTP_OK).json({ id, name, quantity });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    await productService.remove(+id);
    return res.status(HTTP_NO_CONTENT).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
