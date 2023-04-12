const Product = require('../models/products')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

//using middleware async.js for asyncWrapper
//get all products
// const getAllProducts = asyncWrapper(async (req, res) => {
//   const products = await Product.find({})
//   res.status(200).json({ products })
// })

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

const getAllProducts = async (req, res) => {
  const {
    availability,
    manufacturer,
    product_name,
    category,
    sort,
    fields,
    numericFilters,
  } = req.query
  const queryObject = {}

  if (availability) {
    queryObject.availability = availability === 'true' ? true : false
  }

  if (manufacturer) {
    queryObject.manufacturer = { $regex: manufacturer, $options: 'i' }
  }

  if (product_name) {
    queryObject.product_name = { $regex: product_name, $options: 'i' }
  }

  if (category) {
    queryObject.category = category
  }

  if (numericFilters) {
    const operatorMap = {
      '>': '$gt',
      '>=': '$gte',
      '=': '$eq',
      '<': '$lt',
      '<=': '$lte',
    }
    const regEx = /\b(<|>|>=|=|<=)\b/g
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    )
    const options = ['price', 'rating', 'package_quantity']
    filters = filters.split(',').forEach((item) => {
      const [field, operator, value] = item.split('-')
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) }
      }
    })
  }

  console.log(queryObject)

  let result = Product.find(queryObject) // (req.query)
  // sort
  if (sort) {
    const sortList = sort.split(',').join(' ')
    result = result.sort(sortList)
  } else {
    result = result.sort('createdAt')
  }

  if (fields) {
    const fieldList = fields.split(',').join(' ')
    result = result.select(fieldList)
  }

  // const page = Number(req.query.page) || 1
  // const limit = Number(req.query.limit) || 10
  // const skip = (page - 1) * limit

  // result = result.skip(skip).limit(limit)
  // // 23
  // // 4 pages 7,7,7,2

  const products = await result

  res.status(200).json({ products, nbHits: products.length }) //
}

module.exports = {
  getAllProducts,
  getProductsByCategory,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
}
