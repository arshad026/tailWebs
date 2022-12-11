const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId


const studentSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    marks: {
        type: Number,
        required: true
    },
    teacherId: {
        type: ObjectId,
        required: true,
        ref: 'teacher'
    }

}, { timestamps: true })