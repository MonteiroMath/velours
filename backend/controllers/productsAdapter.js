const ProductsController = require("./products");
const mongoProductsController = require("./mongoProducts");

const controller =
  process.env.DB === "MONGODB" ? mongoProductsController : ProductsController;

module.exports = controller;
