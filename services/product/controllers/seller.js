const Seller = require('../models/Seller')
const Product = require('../models/products')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')

const register = async (req, res) => {
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

const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    throw new BadRequestError('Please provide email and password')
  }
  const seller = await Seller.findOne({ email })
  if (!seller) {
    throw new UnauthenticatedError('Invalid credentials')
  }

  const isPasswordCorrect = await seller.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid credentials')
  }
  // compare password
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

const getAllProductsBySeller = async (req, res) => {
  const products = await Product.find({ createdBy: req.user.userId }).sort(
    'createdAt'
  )
  res.status(StatusCodes.OK).json({ products, count: products.length })
}

module.exports = {
  register,
  login,
  getAllProductsBySeller,
}
