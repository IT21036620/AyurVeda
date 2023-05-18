import {
  insertBuyer,
  getBuyer,
  deleteBuyerusingId,
  updateBuyerusingId,
  getBuyers,
  getBuyerByCred,
} from '../repository/buyer.js'

//Insert A New Buyer
export const addBuyer = async ({
  buyerName,
  credentialId,
  address,
  email,
  phone,
}) => {
  const details = {
    buyerName,
    credentialId,
    address,
    email,
    phone,
  }
  const ans = await insertBuyer(details)
  return ans.msg
}

//Get Data Of One Buyer
export const getBuyerById = async (id) => {
  return await getBuyer(id)
}

//Get Data Of One Buyer By CredID
export const getBuyerByCredId = async (id) => {
  return await getBuyerByCred(id)
}

//Get Data Of All Buyers
export const getAllBuyers = async () => {
  return await getBuyers()
}

//Update Buyer Data
export const updateBuyerById = async (id, ob) => {
  const ans = await updateBuyerusingId(id, ob)
  return ans
}

//Delete A Buyer
export const deleteBuyerById = async (id) => {
  return await deleteBuyerusingId(id)
}
