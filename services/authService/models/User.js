const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'must provide a order id'],
    trim: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'seller', 'buyer'],
  },
  password: {
    type: String,
    required: [true, ' must provide a password'],
  },
  refreshToken: {
    type: String,
  },
})

module.exports = mongoose.model('User', UserSchema)
