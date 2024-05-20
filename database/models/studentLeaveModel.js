const mongoose = require('mongoose');

 const studentLeaveSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    enrollmentno:{
        type: Number,
        required: true
    },
    remarks: {
        type: String,
        required: true
    },
    kindofleave:{
        type: String,
        required: true
    },
    leavetype:{
        type: String,
        required: true
    },
    fromdate:{
        type: String,
        required: true
    },
    todate:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Student_Leave', studentLeaveSchema);