const mongoose = require('mongoose')

const groupSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    studentId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }],
    putOrderGroup: {
        type: Number
    },
    weekOfGroup: {
        type: Number,
    },
    endStudy: {
        type: Boolean
    }
})

const Group = mongoose.model('Group',  groupSchema)

module.exports = Group