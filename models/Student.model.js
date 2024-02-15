const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    payment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Payment'    
    },
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'    
        },
    message: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'    
        }],
    status: [{
        type: String,
    }]
})

const Student = mongoose.model('Student',  studentSchema)

module.exports = Student