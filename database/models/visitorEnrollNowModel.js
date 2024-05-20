const mongoose = require('mongoose');

const visitorEnrollNowSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    course: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Visitor_Enroll_Now', visitorEnrollNowSchema);