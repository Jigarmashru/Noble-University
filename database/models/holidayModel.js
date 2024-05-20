const mongoose = require('mongoose');

const holidaySchema = new mongoose.Schema({
    name: {
        type : String,
        require : true
    },
    fromdate: {
        type : String,
        require : true
    },
    todate: {
        type : String,
        require : true
    },
    description: {
        type : String,
        require : true
    }
});

module.exports = mongoose.model('Holiday', holidaySchema);