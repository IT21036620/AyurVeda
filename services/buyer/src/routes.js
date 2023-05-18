import express from 'express'
import { celebrate, Segments } from 'celebrate'

import {
  buyerAdd,
  buyerGet,
  buyersGet,
  updateBuyer,
  deleteBuyer,
  buyerGetByCredId,
} from './controllers/buyer.js'
import { searchProduct } from './controllers/search.js'
import {
  addBuyerSchema,
  updateBuyerSchema,
  deleteBuyerSchema,
  viewBuyerSchema,
} from './validations/buyerValidations.js'
const router = express.Router()

//Insert A New Buyer
router.post(
  '/addBuyer',
  celebrate({ [Segments.BODY]: addBuyerSchema }),
  buyerAdd
)

//Get Data Of One Buyer
router.get(
  '/getBuyer/:id',
  celebrate({ [Segments.PARAMS]: viewBuyerSchema }),
  buyerGet
)

//Get Data Of One Buyer By CredId
router.get(
  '/getBuyerByCredId/:id',
  // celebrate({ [Segments.PARAMS]: viewBuyerSchema }),
  buyerGetByCredId
)

router.get('/searchProduct/:key', searchProduct)

//Get Data Of All Buyers
router.get('/viewAllBuyers', buyersGet)

//Update Buyer Data
router.patch(
  '/updateBuyer/:id',
  celebrate({ [Segments.PARAMS]: updateBuyerSchema }),
  updateBuyer
)

//Delete A Buyer
router.delete(
  '/deleteBuyer/:id',
  celebrate({ [Segments.PARAMS]: deleteBuyerSchema }),
  deleteBuyer
)

export default router
