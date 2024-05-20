const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    id:{
        type : String,
        require : true
    },
    post:{
        type : String,
        require : true
    },
    // enrollmentno:{
    //     type : Number,
    //     require : true
    // },
    name:{
        type : String,
        require : true
    },
    password:{
        type : String,
        require : true
    },
    email:{
        type : String,
        require : true
    }
});

module.exports = mongoose.model('Login', loginSchema);