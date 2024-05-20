const mongoose = require('mongoose');

 const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    semester: {
        type: String,
        required: true
    },
    studentpno: {
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    adharcardno:{
        type: Number,
        required: true
    },
    dob:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    attendence:{
        type: Number,
        required: true
    },
    birthplace:{
        type: String,
        required: true
    },
    fatherdesignation:{
        type: String,
        required: true
    },
    mothername:{
        type: String,
        required: true
    },
    motherpno:{
        type: Number,
        required: true
    },
    hobbies:{
        type: String,
        required: true
    },
    bloodgroup:{
        type: String,
        required: true
    },
    fatherpno:{
        type: Number,
        required: true
    },
    rno:{
        type: Number,
        required: true
    },
    presentadd:{
        type: String,
        required: true
    },
    permananentadd:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    fathername:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    faculty:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    department:{
        type: String,
        required: true
    },
    program:{
        type: String,
        required: true
    },
    admissionno:{
        type: Number,
        required: true
    },
    enrollmentno:{
        type: Number,
        required: true
    },
    admissionyear:{
        type: Number,
        required: true
    },
    admissiontype:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    pincode:{
        type: Number,
        required: true
    },
    post:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Student', studentSchema);