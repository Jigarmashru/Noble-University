const express = require('express');
const router = express.Router();
const {applicationOfCareer,getAllCareer,applicationOfContactUs,getAllContactUs,applicationOfEnrollNow,getAllEnrollNow} = require('../controllers/visitorController');

router.post('/applicationOfCareer',applicationOfCareer);
router.get('/getAllCareer',getAllCareer);
router.post('/applicationOfContactUs',applicationOfContactUs);
router.get('/getAllContactUs',getAllContactUs);
router.post('/applicationOfEnrollNow',applicationOfEnrollNow);
router.get('/getAllEnrollNow',getAllEnrollNow);


module.exports = router;