require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()

// connectDB
const connectDB = require('./db/connect')
const authenticateSeller = require('./middleware/authentication')

// routers
const productRouter = require('./routes/products')
const sellerRouter = require('./routes/seller')

// error handler
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//middleware
app.use(express.json())

//routes
app.use('/api/v1/products', productRouter) // authenticateSeller, productRouter
app.use('/api/v1/seller', sellerRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
