import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import connectDB from './src/config/dbconnet.js'
import buyerRouter from './src/routes.js'

dotenv.config()

const app = express()
app.use(express.json({ limit: '1mb' }))

connectDB()

// app.use(bodyParser.json())

// app.use((req, res, next) => {
//   console.log(req.method, req.url, req.body)
//   next()
// })

app.use('/api/buyer', buyerRouter)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server runing on port ${port}`)
})
