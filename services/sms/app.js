import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

app.use(cors())

const app = express()
app.use(express.json({ limit: '1mb' }))

dotenv.config()

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = require('twilio')(accountSid, authToken)

client.messages
  .create({
    body: 'Your Order Is Approved',
    from: '+15017122661',
    to: '+15558675310',
  })
  .then((message) => console.log(message.sid))

const port = process.env.PORT || 3011

app.listen(port, () => {
  console.log(`Server runing on port ${port}`)
})

//----Code for the Vonage SMS API-----

// import Vonage from '@vonage/server-sdk'
// const vonage = new Vonage({
//   apiKey: 'd34b2ddd',
//   apiSecret: 'Z3AjQ6zHlmksOlU8',
// })

// const from = 'Vonage APIs'
// const to = '+94719036568'
// const text = 'A text message sent using the Vonage SMS API'

// async function sendSMS() {
//   await vonage.sms
//     .send({ to, from, text })
//     .then((resp) => {
//       console.log('Message sent successfully')
//       console.log(resp)
//     })
//     .catch((err) => {
//       console.log('There was an error sending the messages.')
//       console.error(err)
//     })
// }

// sendSMS()
