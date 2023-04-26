const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
const connectDB = require('./db/connect')
// const routes = require('./routes/payments')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const stripe = require("./routes/payments")

//middleware
app.use(express.json())

app.use(bodyParser.json());

//routes
// app.use('/api/v1/payments', routes);
app.use('/api/v1/stripe', stripe);

// app.use(notFound)
// app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server listening on port ${port}...`));
    }catch(error){
        console.log(error)
    }
}


start()