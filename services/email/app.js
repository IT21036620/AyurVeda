import express from 'express'
import dotenv from 'dotenv'
import mailRouter from './route.js'

dotenv.config()

const app = express()
app.use(express.json({ limit: '1mb' }))

app.use('/api/mail', mailRouter)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server runing on port ${port}`)
})
