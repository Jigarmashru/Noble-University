const Visitor_Career = require('../models/visitorCareerModel');
const Visitor_Conntact_Us = require('../models/visitorContactUsModel');
const Visitor_Enroll_Now = require('../models/visitorEnrollNowModel');

// Add Apllication Of Career By Visitor
const applicationOfCareer = async (req, res) => {
    try {
        let data = {
            "prefix": req.body.prefix,
            "firstname": req.body.fnm,
            "middlename": req.body.mnm,
            "lastname": req.body.lnm,
            "pno": req.body.pno,
            "email": req.body.email,
            "applyforpost": req.body.applyforpost,
            "applyforfacultyof": req.body.applyforfacultyof,
            "applyingfor": req.body.applyingfor,
            "file": req.body.file
        }
        const visitorCareer = await Visitor_Career.insertMany(data);
        res.status(200).json(visitorCareer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get All Application Of Career Which Visitor Apply
const getAllCareer = async (req, res) => {
    try {
        const visitorCareerData = await Visitor_Career.find();
        res.status(200).json(visitorCareerData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Add Application Of ContactUs By Visitor
const applicationOfContactUs = async (req, res) => {
    try {
        let data = {
            "name": req.body.nm,
            "email": req.body.mail,
            "pno": req.body.pno,
            "msg": req.body.msg
        }
        const visitorConntactUs = await Visitor_Conntact_Us.insertMany(data);
        res.status(200).json(visitorConntactUs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get All Application Of ContactUs Which Visitor Apply
const getAllContactUs = async (req, res) => {
    try {
        const visitorConntactUsData = await Visitor_Conntact_Us.find();
        res.status(200).json(visitorConntactUsData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Add Application Of Enrollment By Visitor
const applicationOfEnrollNow = async (req, res) => {
    try {
        let data = {
            "name": req.body.nm,
            "email": req.body.mail,
            "phonenumber": req.body.pno,
            "course": req.body.course
        }
        const visitorEnrollNow = await Visitor_Enroll_Now.insertMany(data);
        res.status(200).json(visitorEnrollNow);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get All Application Of Enrollment Which Visitor Aplly
const getAllEnrollNow = async (req, res) => {
    try {
        const visitorEnrollNowData = await Visitor_Enroll_Now.find();
        res.status(200).json(visitorEnrollNowData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { applicationOfCareer, getAllCareer, applicationOfContactUs, getAllContactUs, applicationOfEnrollNow, getAllEnrollNow };