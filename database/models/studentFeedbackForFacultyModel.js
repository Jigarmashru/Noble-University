const mongoose = require('mongoose');

 const studentFeedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    enrollmentno:{
        type: Number,
        required: true
    },
    facultyname: {
        type: String,
        required: true
    },
    subjectname:{
        type: String,
        required: true
    },
    feedback:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Student_Feedback_For_Faculty', studentFeedbackSchema);