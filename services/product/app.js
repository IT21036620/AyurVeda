require('dotenv').config()
require('express-async-errors')

// extra security packages
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')

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
app.set('trust proxy', 1)
app.use(
  rateLimiter({
    windowsMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
)
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(xss())
app.use('/uploads', express.static('uploads'))

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
