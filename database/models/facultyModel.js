const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    phoneno : {
        type : Number,
        require : true
    },
    department : {
        type : String,
        require : true
    },
    post : {
        type : String,
        require : true
    },
    address : {
        type : String,
        require : true
    },
    adharcardno : {
        type : Number,
        require : true
    },
    dob : {
        type : String,
        require : true
    },
    program : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    city : {
        type : String,
        require : true
    },
    state : {
        type : String,
        require : true
    },
    gender : {
        type : String,
        require : true
    },
    country : {
        type : String,
        require : true
    },
    pincode : {
        type : Number,
        require : true
    }
});

module.exports = mongoose.model('Faculty', facultySchema);