const express = require('express');
const router = express.Router();
const { addHoliday, getAllHoliday, deleteOneHoliday } = require('../controllers/holidayController');

router.post('/addHoliday', addHoliday);
router.get('/getAllHoliday',getAllHoliday);   
router.get('/deleteOneHoliday/:id',deleteOneHoliday);   

module.exports = router;