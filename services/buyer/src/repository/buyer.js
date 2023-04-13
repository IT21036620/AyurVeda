import mongoose from 'mongoose'
import buyer from '../models/buyer.js'

//Insert A New buyer
export const insertBuyer = async (details) => {
  //Check if Buyer business_name Already exists
  // const userWithsamename = await buyer.exists({
  //   business_name: details.business_name,
  // })

  // if (userWithsamename) {
  //   return { msg: 'Suppler Already exist with the same business_name' }
  // }

  const buyer = new buyer({
    buyerName: details.buyerName,
    credentialId: details.credentialId,
    address: details.address,
    email: details.email,
    phone: details.phone,
  })
  await buyer.save()
  return { msg: 'buyer Inserted Successfully' }
}

//Get Data Of One Buyer
export const getBuyer = async (id) => {
  //check for valid objectId
  // if (!mongoose.Types.ObjectId.isValid(id)) {
  //   return { msg: 'No Buyer is available with this id' }
  // }
  try {
    //Check if Buyer exists
    if ((await buyer.findById(mongoose.Types.ObjectId(id))) == null) {
      return { msg: 'No Buyer is available with this id' }
    }

    return await buyer.findById(mongoose.Types.ObjectId(id))
  } catch (error) {
    return { msg: 'Search Buyer by id failed' }
  }
}

//Get Data Of All Buyers
export const getBuyers = async () => {
  try {
    return await buyer.find({}).sort({ createdAt: -1 })
  } catch (error) {
    return { msg: 'no Buyers found' }
  }
}

//Update Buyer Data
export const updateBuyerusingId = async (id, ob) => {
  //check for valid objectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return { msg: 'No Buyer is available with this id' }
  }
  //Check if Buyer exists
  if ((await buyer.findById(mongoose.Types.ObjectId(id))) == null) {
    return { msg: 'No Buyer is available with this id' }
  }

  try {
    const res = await buyer.findById(id)
    Object.assign(res, ob)
    await res.save()
    return { msg: 'Buyer updated successfully' }
  } catch (error) {
    return { msg: 'Buyer update failed' }
  }
}

//Delete A Buyer
export const deleteBuyerusingId = async (id) => {
  //check for valid objectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return { msg: 'No Buyer is available with this id' }
  }
  //Check if Buyer exists
  if ((await buyer.findById(mongoose.Types.ObjectId(id))) == null) {
    return { msg: 'No Buyer is available with this id' }
  }

  try {
    await buyer.findByIdAndDelete(id)
    return { msg: 'Buyer deleted successfully' }
  } catch (error) {
    return { msg: 'Buyer deletion failed' }
  }
}
