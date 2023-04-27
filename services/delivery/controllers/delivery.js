const Delivery = require('../models/Delivery')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error')


const getAllDeliveries = asyncWrapper( async (req,res) => {
        const deliveries = await Delivery.find({})  
        res.status(200).json({ deliveries })
})

const createDelivery = asyncWrapper( async (req,res) => {
        const delivery = await Delivery.create(req.body)
        res.status(201).json({delivery})
        // res.send('create delivery')      
})

const getDelivery = asyncWrapper( async (req,res, next) => {
        const {id:deliveryID} = req.params;
        const delivery = await Delivery.findOne({_id:deliveryID});

        if(!delivery) {
            return next(createCustomError(`No delivery with id: ${deliveryID}`,404))
           
        }

        res.status(200).json({delivery})

    // res.send('get delivery')
})

const updateDelivery = asyncWrapper( async (req,res) => {
        const {id:deliveryID} = req.params;
        
        const delivery = await Delivery.findOneAndUpdate({_id:deliveryID},req.body,{
            new:true,
            runValidators:true,
        })

        if(!delivery) {
            return next(createCustomError(`No delivery with id: ${deliveryID}`,404))
        }

        res.status(200).json({delivery})
    // res.send('update delivery')
})

const deleteDelivery = asyncWrapper( async (req,res) => {
        const {id:deliveryID} = req.params;
        const delivery = await Delivery.findOneAndDelete({_id:deliveryID});
        if(!delivery){
            return next(createCustomError(`No delivery with id: ${deliveryID}`,404))
        }

        res.status(200).json({delivery})

    // res.send('delete delivery')
})

module.exports = {
    getAllDeliveries,
    createDelivery,
    getDelivery,
    updateDelivery,
    deleteDelivery
}