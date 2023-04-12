import express from 'express'
import dotenv from 'dotenv'
import connectDB from './src/config/dbconnet.js'

dotenv.config()

const app = express()

connectDB()

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome' })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server runing on port ${port}`)
})
