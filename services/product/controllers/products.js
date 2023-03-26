const Product = require('../models/products')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

//using middleware async.js for asyncWrapper
//get all products
const getAllProducts = asyncWrapper(async (req, res) => {
  const products = await Product.find({})
  res.status(200).json({ products })
})

//using errors custom-error.js for createCustomError
//get all products of a given category
const getProductsByCategory = asyncWrapper(async (req, res, next) => {
  const { id: productCat } = req.params
  const products = await Product.find({ category: productCat }).exec()
  if (!products) {
    return next(
      createCustomError(`No product with category: ${productCat}`, 404)
    )
  }
  res.status(200).json({ products })
})

//add a new product
const createProduct = asyncWrapper(async (req, res) => {
  const product = await Product.create(req.body)
  res.status(201).json({ product })
})

//using errors custom-error.js for createCustomError
//get a product by id
const getProduct = asyncWrapper(async (req, res, next) => {
  const { id: productID } = req.params
  const product = await Product.findOne({ _id: productID })

  if (!product) {
    return next(createCustomError(`No product with id: ${productID}`, 404))
  }
  res.status(200).json({ product })
})

//using errors custom-error.js for createCustomError
//delete a product by id
const deleteProduct = asyncWrapper(async (req, res, next) => {
  const { id: productID } = req.params
  const product = await Product.findOneAndDelete({ _id: productID })
  if (!product) {
    return next(createCustomError(`No product with id: ${productID}`, 404))
  }
  res.status(200).json({ product })
})

//using errors custom-error.js for createCustomError
//update a product by id
const updateProduct = asyncWrapper(async (req, res, next) => {
  const { id: productID } = req.params
  const product = await Product.findOneAndUpdate({ _id: productID }, req.body, {
    new: true,
    runValidators: true,
  })
  if (!product) {
    return next(createCustomError(`No product with id: ${productID}`, 404))
  }
  res.status(200).json({ product })
})

module.exports = {
  getAllProducts,
  getProductsByCategory,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
}
