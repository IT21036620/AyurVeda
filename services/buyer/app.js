import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './src/config/dbconnet.js'
import buyerRouter from './src/routes.js'
import credentials from './src/middleware/credentials.js'

dotenv.config()

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}

const app = express()
app.use(credentials)
app.use(cors(corsOptions))
app.use(express.json({ limit: '1mb' }))

app.use(cors())

connectDB(process.env.Mongo_URI)

app.use('/api/buyer', buyerRouter)

const port = process.env.PORT || 3002

app.listen(port, () => {
  console.log(`Server runing on port ${port}`)
})
