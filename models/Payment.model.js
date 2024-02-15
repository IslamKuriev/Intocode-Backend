const mongoose = require('mongoose')

const paymentSchema = mongoose.Schema({
    status: {
        type: String,
        required: true
    },
})

const Payment = mongoose.model('Payment',  paymentSchema)

module.exports = Payment