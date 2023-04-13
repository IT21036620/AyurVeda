import express from 'express'
import {
  buyerAdd,
  buyerGet,
  buyersGet,
  updateBuyer,
  deleteBuyer,
} from './controllers/buyer.js'
const router = express.Router()

router.get('/', (req, res) => {
  res.json({ msg: 'Welcome' })
})

router.get('/test', (req, res) => {
  res.json({ msg: 'Test' })
})

//Insert A New Buyer
router.post(
  '/addBuyer',
  // celebrate({ [Segments.BODY]: addBuyerSchema }),
  buyerAdd
)

//Get Data Of One Buyer
router.get(
  '/:id',
  //   celebrate({ [Segments.PARAMS]: viewBuyerSchema }),
  // BuyerCheck,
  buyerGet
)

//Get Data Of All Buyers
router.get('/viewAllBuyers', buyersGet)

//Update Buyer Data
router.patch(
  '/:id',
  //   celebrate({ [Segments.PARAMS]: updateBuyerSchema }),
  updateBuyer
)

//Delete A Buyer
router.delete(
  '/:id',
  //   celebrate({ [Segments.PARAMS]: deleteBuyerSchema }),
  deleteBuyer
)

export default router
