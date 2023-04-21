import express from 'express'
import { supplierMailer } from './mailController.js'

const router = express.Router()

router.post('/', supplierMailer)
// router.get('/', (req, res) => {
//   res.json({ mssg: 'Inside mail route' })
// })

export default router
