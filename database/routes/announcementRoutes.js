const express = require('express');
const router = express.Router();
const { addAnnouncement, getAllAnnouncement, deleteOneAnnouncement } = require('../controllers/announcementController');

router.post('/addAnnouncement', addAnnouncement);
router.get('/getAllAnnouncement',getAllAnnouncement);   
router.get('/deleteOneAnnouncement/:id',deleteOneAnnouncement);   

module.exports = router;