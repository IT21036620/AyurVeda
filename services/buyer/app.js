import express from 'express'
import dotenv from 'dotenv'
import connectDB from './src/config/dbconnet.js'
import buyerRouter from './src/routes.js'

dotenv.config()

const app = express()

connectDB()

app.use('/api/buyer', buyerRouter)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server runing on port ${port}`)
})
