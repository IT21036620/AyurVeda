const express = require('express')
const app = express()
const revenue = require('./routes/revenue')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const cors = require('cors')

//middleware
app.use(express.json())

app.use(cors())

//routes
app.use('/api/v1/revenue', revenue)

app.use(notFound)
// app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3012

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`server listening on port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start()
