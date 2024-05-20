const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
    title: {
        type : String,
        require : true
    },
    message: {
        type : String,
        require : true
    },
    date: {
        type : String,
        require : true
    }
});

module.exports = mongoose.model('Announcement', announcementSchema);