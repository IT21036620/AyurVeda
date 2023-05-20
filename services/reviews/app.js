import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './config/dbconnet.js'
import reviewRoutes from './routes.js'
import credentials from './middleware/credentials.js'

dotenv.config()

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}

const app = express()
app.use(credentials)
// app.use(cors(corsOptions))
app.use(express.json({ limit: '1mb' }))

app.use(cors())

connectDB(process.env.Mongo_URI)

app.use('/api/v1/reviews/', reviewRoutes)

const port = process.env.PORT || 3009

app.listen(port, () => {
  console.log(`Server runing on port ${port}`)
})
