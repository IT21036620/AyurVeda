const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
// const dotenv = require("dotenv");
const app = express()
require('dotenv').config()
const connectDB = require('./db/connect')

const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const paymentRoutes = require('./routes/payments')
// const paymentRoutes = require('./routes/payments')
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

//middleware
app.use(express.json())

app.use(cors())

app.use(bodyParser.json())

//routes
// app.use('/api/v1', paymentRoutes)

// app.use(notFound)
// app.use(errorHandlerMiddleware)

// const stripe = require('stripe')(process.env.STRIPE_KEY)

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/payment', paymentRoutes)

// app.post('/payment', async (req, res) => {
//   const { amount, token } = req.body

//   try {
//     const charge = await stripe.charges.create({
//       amount,
//       currency: 'usd',
//       source: token.id,
//       description: 'Payment for your purchase',
//     })

//     res.status(200).json({ success: true, charge })
//   } catch (err) {
//     res.status(500).json({ success: false, err })
//   }
// })

const port = process.env.PORT || 3006

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`server listening on port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start()
