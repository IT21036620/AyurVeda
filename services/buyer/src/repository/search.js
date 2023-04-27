import mongoose from 'mongoose'
import Product from '../models/product.js'

export const searchProducts = async (key) => {
  const products = await Product.find({
    $or: [
      { _id: key },
      { product_name: { $regex: key, $options: 'i' } },
      { type: { $regex: key, $options: 'i' } },
    ],
  })
  return products
}
