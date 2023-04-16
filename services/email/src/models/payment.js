const mongoose = require('mongoose');

//schema
// const Schema = mongoose.Schema; //creating an object
const paymentSchema = new mongoose.Schema(
    {
        paymentId: {
            type: String,
            required: true
          },
          amount: {
            type: Number,
            required: true
          },
          status: {
            type: String,
            enum: ['pending', 'successful', 'failed'],
            required: true
          },
          cardNumber: {
            type: String,
            required: true
          },
          expiryDate: {
            type: Date,
            required: true
          },
          cvv: {
            type: String,
            required: true
          }    
    }
)
const Payment = mongoose.model('Payment', paymentSchema);//(table name ,document name),Schema name


module.exports = Payment; 