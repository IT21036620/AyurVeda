const express = require('express')
const app = express()
const cart = require('./routes/cart')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const cors = require('cors')
// const credentials = require('./middleware/credentials')

// var corsOptions = {
//   origin: 'http://localhost:3000',
//   optionsSuccessStatus: 200,
// }

// //middleware
// app.use(credentials)
// app.use(cors(corsOptions))

app.use(express.json())

app.use(cors())

//routes
app.use('/api/v1/cart', cart)

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3003

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`server listening on port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start()
