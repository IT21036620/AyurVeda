const Seller = require('../models/Seller')
const Product = require('../models/products')
const bcrypt = require('bcryptjs')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')

// seller register with jwt token
const register = async (req, res) => {
  // checking for the seller profile image
  if (req.file) {
    req.body.profile_image = req.file.path
  } else {
    req.body.profile_image = 'uploads\\default.jpg'
  }
  const seller = await Seller.create({ ...req.body })

  const token = seller.createJWT()
  res.status(StatusCodes.CREATED).json({
    seller: {
      seller_name: seller.name,
      email: seller.email,
      company_name: seller.company_name,
      contact: seller.phone,
    },
    token,
  })
}

// seller login with validating credentials and generating jwt token
const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    throw new BadRequestError('Please provide email and password')
  }
  const seller = await Seller.findOne({ email })
  if (!seller) {
    throw new UnauthenticatedError('Invalid email')
  }

  // compare password
  const isPasswordCorrect = await seller.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid password')
  }

  const token = seller.createJWT()
  res.status(StatusCodes.OK).json({
    seller: {
      seller_name: seller.name,
      email: seller.email,
      company_name: seller.company_name,
    },
    token,
  })
}

// get all products created by the seller
const getAllProductsBySeller = async (req, res) => {
  const products = await Product.find({ createdBy: req.user.userId }).sort(
    'createdAt'
  )
  res.status(StatusCodes.OK).json({ products, count: products.length })
}

//using errors custom-error.js for createCustomError
//delete a seller by id
const deleteSeller = asyncWrapper(async (req, res, next) => {
  const { id: sellerID } = req.params
  const seller = await Seller.findOneAndDelete({ _id: sellerID })
  if (!seller) {
    return next(createCustomError(`No Seller with id: ${sellerID}`, 404))
  }
  res.status(200).json({ seller })
})

//using errors custom-error.js for createCustomError
//update a seller by id
const updateSeller = asyncWrapper(async (req, res, next) => {
  const { id: sellerID } = req.params
  const seller = await Seller.findOneAndUpdate(
    { _id: sellerID },
    { ...req.body },
    {
      new: true,
      runValidators: true,
    }
  )

  // update password with bcrypt
  var upPassword = async function () {
    const salt = await bcrypt.genSalt(10)
    seller.password = await bcrypt.hash(req.body.password, salt)
  }
  upPassword()
  seller.save()

  const token = seller.createJWT()
  res.status(StatusCodes.OK).json({
    seller: {
      seller_name: seller.name,
      email: seller.email,
      company_name: seller.company_name,
      contact: seller.phone,
    },
    token,
  })
  if (!seller) {
    return next(createCustomError(`No Seller with id: ${sellerID}`, 404))
  }
})

//update seller rating by id
const changeSellerRatingByID = asyncWrapper(async (req, res, next) => {
  const { id: sellerID } = req.params
  const seller = await Seller.findOneAndUpdate(
    { _id: sellerID },
    req.body.rating,
    {
      new: true,
      runValidators: true,
    }
  )
  var changeRating = async function () {
    seller.rate_count = seller.rate_count + 1
    seller.rate_aggregate = seller.rate_aggregate + req.body.rating
    var newRating = seller.rate_aggregate / seller.rate_count

    seller.rating = parseFloat(newRating).toFixed(2) //newRating
    seller.save()
  }
  changeRating()

  if (!seller) {
    return next(createCustomError(`No seller with id: ${sellerID}`, 404))
  }
  res.status(200).json(`Rating successfully updated`)
})

module.exports = {
  register,
  login,
  getAllProductsBySeller,
  deleteSeller,
  updateSeller,
  changeSellerRatingByID,
}
