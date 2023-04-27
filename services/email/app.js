import express from 'express'
import dotenv from 'dotenv'
import mailRouter from './route.js'
import cors from 'cors'

dotenv.config()

const app = express()
app.use(express.json({ limit: '1mb' }))

app.use(cors())

app.use('/api/mail', mailRouter)

const port = process.env.PORT || 3005

app.listen(port, () => {
  console.log(`Server runing on port ${port}`)
})
