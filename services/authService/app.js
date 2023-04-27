const express = require('express')
const app = express()
const users = require('./routes/user')
const connectDB = require('./db/connect')
const cors = require('cors')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const cookieParser = require('cookie-parser')
const credentials = require('./middleware/credentials')

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}

//middleware
app.use(credentials)
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())

//routes
app.use('/api/v1/auth', users)

// app.use(notFound)
// app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3001

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`server listening on port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start()
