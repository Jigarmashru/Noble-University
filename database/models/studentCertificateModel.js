const mongoose = require('mongoose');

 const studentCertificateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    enrollmentno:{
        type: Number,
        required: true
    },
    certificate: {
        type: String,
        required: true
    },
    purposecertificate:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Student_Certificate', studentCertificateSchema);