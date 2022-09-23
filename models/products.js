const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(`
    SELECT * FROM StoreManager.products
    ORDER BY id ASC`);
  return result;
};

const getById = async (id) => {
  const [result] = await connection.execute(
    `
    SELECT * FROM StoreManager.products
    WHERE id = ?`,
    [id],
  );
  return result[0];
};

const getByName = async (name) => {
  const [result] = await connection.execute(
    `
    SELECT * FROM StoreManager.products
    WHERE name = ?`,
    [name],
  );
  return result;
};

const create = async (name, quantity) => {
  const [result] = await connection.execute(
    `
    INSERT INTO StoreManager.products
    (name, quantity) VALUES (?, ?)`,
    [name, quantity],
  );
  return result;
};

const update = async (id, name, quantity) => {
  await connection.execute(
    `
    UPDATE StoreManager.products
    SET name = ?, quantity = ?
    WHERE id = ?`,
    [name, quantity, id],
  );
};

const remove = async (id) => {
  await connection.execute(
    `
    DELETE FROM StoreManager.products
    WHERE id = ?`,
    [id],
  );
};

const removeQuantity = async (id, quantity) => {
  await connection.execute(
    `
    UPDATE StoreManager.products
    SET quantity = quantity - ?
    WHERE id = ?`,
    [quantity, id],
  );
};

const addQuantity = async (id, quantity) => {
  await connection.execute(
    `
    UPDATE StoreManager.products
    SET quantity = quantity + ?
    WHERE id = ?`,
    [quantity, id],
  );
};

module.exports = {
  getAll,
  getById,
  getByName,
  create,
  update,
  remove,
  removeQuantity,
  addQuantity,
};
