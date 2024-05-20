const express = require('express');
const router = express.Router();
const {addData,checkData,updateData,deleteOneData,changePassword} = require('../controllers/loginController');

router.post('/loginAdd',addData);
router.post('/loginCheck',checkData);   
router.post('/loginUpdate',updateData);   
router.post('/changePassword',changePassword);   
router.get('/loginDelete/:id',deleteOneData);   

module.exports = router;