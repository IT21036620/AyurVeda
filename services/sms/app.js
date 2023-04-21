import Vonage from '@vonage/server-sdk'
import dotenv from 'dotenv'

dotenv.config()

const vonage = new Vonage({
  apiKey: 'd34b2ddd',
  apiSecret: 'Z3AjQ6zHlmksOlU8',
})

const from = 'Vonage APIs'
const to = '+94719036568'
const text = 'A text message sent using the Vonage SMS API'

async function sendSMS() {
  await vonage.sms
    .send({ to, from, text })
    .then((resp) => {
      console.log('Message sent successfully')
      console.log(resp)
    })
    .catch((err) => {
      console.log('There was an error sending the messages.')
      console.error(err)
    })
}

// sendSMS()
