const Product = require("../models/mongoProducts");

const getProducts = (req, res, next) => {
  //return a list of all products

  Product.find({})
    .then((products) => res.json({ success: true, products }))
    .catch(next);
};

const createProduct = (req, res, next) => {
  const { name, category, price, quantity, image } = req.body;

  if (!name || !category || !price || !quantity || !image)
    throw new Error("Invalid request - Product data must be informed");

  Product.create({ name, category, price, quantity, image })
    .then((product) => res.json({ success: true, product }))
    .catch(next);
};

const getProduct = (req, res, next) => {
  const { id } = req.params;

  Product.find({ _id: id })
    .then((product) => {
      if (!product) throw new Error(`Product id ${id} not found`);

      res.json({
        success: true,
        product,
      });
    })
    .catch(next);
};

const updateProduct = (req, res, next) => {
  const { id } = req.params;
  const { name, category, price, quantity, image } = req.body;

  Product.findOneAndUpdate(
    { _id: id },
    { name, category, price, quantity, image },
    { returnDocument: "after" }
  )
    .then((product) => res.json({ success: true, product }))
    .catch(next);
};

const deleteProduct = (req, res, next) => {
  const { id } = req.params;

  Product.deleteOne({ _id: id })
    .then(() => res.json({ success: true, productId: id }))
    .catch(next);
};

module.exports = {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
