const mongoose = require('mongoose');

 const studentComplaintSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    enrollmentno:{
        type: Number,
        required: true
    },
    complaint: {
        type: String,
        required: true
    },
    subcomplaint:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Student_Complaint', studentComplaintSchema);