const productModel = require('../models/products');

const getAll = async () => productModel.getAll();

const getById = async (id) => productModel.getById(id);

const create = async (name, quantity) => {
  const createdProduct = await productModel.create(name, quantity);
  return { id: createdProduct.insertId, name, quantity };
};

const update = async (id, name, quantity) => {
  await productModel.update(id, name, quantity);
};

const remove = async (id) => {
  await productModel.remove(id);
};

const removeQuantity = async (id, quantity) => {
  await productModel.removeQuantity(id, quantity);
};

const addQuantity = async (id, quantity) => {
  await productModel.addQuantity(id, quantity);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  removeQuantity,
  addQuantity,
};
