const mongoose = require('mongoose');

const visitorContactUsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pno: {
        type: Number,
        required: true
    },
    msg: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Visitor_Conntact_Us', visitorContactUsSchema);