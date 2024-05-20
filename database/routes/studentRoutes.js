const express = require('express');
const router = express.Router();
const { getAllStudents, getStudentById, addStudent, updateStudent, deleteOneStudent, changePassword, applicationOfCertificate, getAllCertificate, deleteOneCertificate, applicationOfComplaint, deleteOneComplaint, getComplaintById, getAllComplaint, applicationOfFeedback, getAllFeedback, getFeedbackById, deleteOneFeedback, applicationOfLeave, getAllLeave, getLeaveById, deleteOneLeave } = require('../controllers/studentController');

router.post('/addStudent',addStudent)
router.post('/updateStudent',updateStudent)
router.post('/changePassword',changePassword)
router.get('/getAllStudents',getAllStudents)
router.get('/getStudentById/:id',getStudentById)
router.get('/deleteOneStudent/:id',deleteOneStudent)

router.post('/applicationOfCertificate',applicationOfCertificate)
router.get('/getAllCertificate',getAllCertificate)
router.get('/deleteOneCertificate/:id',deleteOneCertificate)

router.post('/applicationOfComplaint',applicationOfComplaint)
router.get('/getAllComplaint',getAllComplaint)
router.get('/getComplaintById/:enrollno',getComplaintById)
router.get('/deleteOneComplaint/:id',deleteOneComplaint)

router.post('/applicationOfFeedback',applicationOfFeedback)
router.get('/getAllFeedback',getAllFeedback)
router.get('/getFeedbackById/:enrollno',getFeedbackById)
router.get('/deleteOneFeedback/:id',deleteOneFeedback)

router.post('/applicationOfLeave',applicationOfLeave)
router.get('/getAllLeave',getAllLeave)
router.get('/getLeaveById/:enrollno',getLeaveById)
router.get('/deleteOneLeave/:id',deleteOneLeave)

module.exports = router;