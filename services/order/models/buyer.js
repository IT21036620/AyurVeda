import mongoose from 'mongoose'

const buyerSchema = mongoose.Schema(
  {
    buyerName: {
      type: String,
      required: true,
      unique: true,
    },
    credentialId: {
      type: String,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

const buyer = mongoose.model('buyer', buyerSchema)
export default buyer
