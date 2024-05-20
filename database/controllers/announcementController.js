const Announcement = require('../models/announcementModel');

//add announcement
const addAnnouncement = async (req, res) => {
    try {
        let data = {
            "title": req.body.title,
            "message": req.body.message,
            "date": req.body.date
        }
        const announcement = await Announcement.insertMany(data);
        res.status(200).json(announcement);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// get all holiday
const getAllAnnouncement = async (req, res) => {
    try {
        const getAnnouncement = await Announcement.find();
        res.status(200).json(getAnnouncement);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// delete holiday
const deleteOneAnnouncement = async(req, res) => {
    try{
        const id = req.params.id;

        const oneAnnouncementDelete = await Announcement.findByIdAndDelete(id);
        if(!oneAnnouncementDelete){
            return res.status(404).json({ message: 'Something Wrong...' });
        }
        res.status(200).json(oneAnnouncementDelete);
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}


module.exports = { addAnnouncement, getAllAnnouncement, deleteOneAnnouncement };