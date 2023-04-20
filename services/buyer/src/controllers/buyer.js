import asyncHandler from '../middleware/async.js'
import makeResponse from '../middleware/response.js'

import {
  addBuyer,
  getBuyerById,
  getAllBuyers,
  deleteBuyerById,
  updateBuyerById,
} from '../services/buyer.js'

//Insert A New buyer
export const buyerAdd = asyncHandler(async (req, res) => {
  const ans = await addBuyer(req.body)
  return makeResponse({
    res,
    status: 201,
    data: ans,
    massage: 'buyer successfully created',
  })
})

//Get Data Of One buyer
export const buyerGet = asyncHandler(async (req, res) => {
  const ans = await getBuyerById(req.params.id)
  return makeResponse({
    res,
    status: 200,
    data: ans,
    massage: 'buyer detail successfully fetched',
  })
})

//Get Data Of All buyers
export const buyersGet = asyncHandler(async (req, res) => {
  const ans = await getAllBuyers()
  return makeResponse({
    res,
    status: 200,
    data: ans,
    massage: 'buyers successfully fetched',
  })
  // res.status(200).json(ans)
})

//Update buyer Data
export const updateBuyer = asyncHandler(async (req, res) => {
  const ans = await updateBuyerById(req.params.id, req.body)
  return makeResponse({
    res,
    status: 200,
    data: ans,
    massage: 'buyer successfully updated',
  })
  // res.send(ans)
})

//Delete A buyer
export const deleteBuyer = asyncHandler(async (req, res) => {
  const ans = await deleteBuyerById(req.params.id)
  return makeResponse({
    res,
    status: 200,
    data: ans,
    massage: 'buyer successfully deleted',
  })
  // res.send(ans)
})
