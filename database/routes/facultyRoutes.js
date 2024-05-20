const express = require('express');
const router = express.Router();
const { addFaculty, getAllFaculty, updateFaculty, getOneFaculty, deleteOneFaculty, changePassword } = require('../controllers/facultyController');

router.post('/addFaculty',addFaculty)
router.get('/getAllFaculty',getAllFaculty)
router.post('/updateFaculty',updateFaculty)
router.get('/getOneFaculty/:id',getOneFaculty)
router.get('/deleteOneFaculty/:id',deleteOneFaculty)
router.post('/changePassword',changePassword)

module.exports = router;