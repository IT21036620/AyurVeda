const express = require('express')
const app = express()
const deliveries = require('./routes/delivery')
const connectDB = require('./db/connect')
const cors = require('cors')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//middleware
app.use(cors())
app.use(express.json())

//routes
app.use('/api/v1/deliveries', deliveries)

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3004

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`server listening on port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start()
