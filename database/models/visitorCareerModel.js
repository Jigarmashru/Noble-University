const mongoose = require('mongoose');

const visitorCareerSchema = new mongoose.Schema({
    prefix: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    middlename: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    pno: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    applyforpost: {
        type: String,
        required: true
    },
    applyforfacultyof: {
        type: String,
        required: true
    },
    applyingfor: {
        type: String,
        required: true
    },
    file: {
        type: Buffer,
        required: true
    }
});

module.exports = mongoose.model('Visitor_Career', visitorCareerSchema);