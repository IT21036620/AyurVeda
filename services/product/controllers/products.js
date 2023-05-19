const Product = require('../models/products')
const asyncWrapper = require('../middleware/async')
const multer = require('multer')
const cloudinary = require('../config/cloudinary')
const { createCustomError } = require('../errors/custom-error')

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

// create a new product with checking image file
const createProduct = asyncWrapper(async (req, res) => {
  req.body.createdBy = req.user.userId

  if (req.file) {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'dsProducts',
    })

    req.body.image = result.secure_url
  } else {
    req.body.image =
      'https://res.cloudinary.com/dbcmklrpv/image/upload/v1684347134/default-product_x6jgjo.png'
  }

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

  if (req.file) {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'dsProducts',
    })
    req.body.image = result.secure_url
  }
  const product = await Product.findByIdAndUpdate(
    { _id: productID },
    req.body,
    {
      new: true,
    }
  )
  if (!product) {
    return next(createCustomError(`No product with id: ${productID}`, 404))
  }
  res.status(200).json({ product })
})

// get all products with search and sort options passed as a query in the req
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

  const products = await result

  res.status(200).json({ products, nbHits: products.length }) //
}

//update product rating by id
const changeProductRatingByID = asyncWrapper(async (req, res, next) => {
  const { id: productID } = req.params
  const product = await Product.findOneAndUpdate(
    { _id: productID },
    req.body.rating,
    {
      new: true,
      runValidators: true,
    }
  )
  var changeRating = async function () {
    product.rating = req.body.rating
    product.rate_count = product.rate_count + 1
    product.rate_aggregate = product.rate_aggregate + product.rating
    var newRating = product.rate_aggregate / product.rate_count

    product.rating = parseFloat(newRating).toFixed(2) //newRating
    product.save()
  }
  changeRating()

  if (!product) {
    return next(createCustomError(`No product with id: ${productID}`, 404))
  }
  res.status(200).json(`Rating successfully updated`)
})

module.exports = {
  getAllProducts,
  getProductsByCategory,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  changeProductRatingByID,
}
