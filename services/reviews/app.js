import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './config/dbconnet.js'
import reviewRoutes from './routes.js'

dotenv.config()

const app = express()
app.use(express.json({ limit: '1mb' }))

app.use(cors())

connectDB(process.env.Mongo_URI)

app.use('/api/v1/reviews/', reviewRoutes)

const port = process.env.PORT || 3020

app.listen(port, () => {
  console.log(`Server runing on port ${port}`)
})
