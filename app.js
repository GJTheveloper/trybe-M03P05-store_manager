require('dotenv').config();

const express = require('express');
const productsRouter = require('./routes/products');
const salesRouter = require('./routes/sales');
const error = require('./middlewares/error');

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/sales', salesRouter);
app.use(error);

app.get('/', (_request, response) => {
  response.send();
});

module.exports = app;
