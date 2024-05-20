const Faculty = require('../models/facultyModel');

// add faculty details
const addFaculty = async(req, res) => {
    try {
        let data = {
            "name": req.body.name,
            "email": req.body.email,
            "phoneno": req.body.pno,
            "department": req.body.department,
            "post": req.body.post,
            "address": req.body.add,
            "adharcardno": req.body.adharno,
            "dob": req.body.dob,
            "program": req.body.program,
            "password": req.body.psw,
            "city": req.body.city,
            "state": req.body.state,
            "gender": req.body.gender,
            "country": req.body.country,
            "pincode": req.body.pincode
        }
        const facultyData = await Faculty.insertMany(data);
        res.status(200).json(facultyData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// get all faculty details
const getAllFaculty = async(req, res) => {
    try{
        const facultyData = await Faculty.find();
        res.status(200).json(facultyData);
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}

// update any column in faculty table
const updateFaculty = async(req, res) => {
    try{
        const id = req.body._id;

        const update = {
            "name": req.body.name,
            "email": req.body.email,
            "phoneno": req.body.pno,
            "department": req.body.department,
            // "post": req.body.post,
            "address": req.body.add,
            "adharcardno": req.body.adharno,
            "dob": req.body.dob,
            "program": req.body.program,
            "password": req.body.psw,
            "city": req.body.city,
            "state": req.body.state,
            "gender": req.body.gender,
            "country": req.body.country,
            "pincode": req.body.pincode
        }

        const object = { returnOriginal : false }

        const facultyUpdate = await Faculty.findByIdAndUpdate(id,{$set : update},object);
        if(!facultyUpdate){
            return res.status(404).json({ message: 'Something Wrong...' });
        }
        res.status(200).json(facultyUpdate);
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}

// Faculty find by id
const getOneFaculty = async(req, res) => {
    try{
        const id = req.params.id;

        const oneFacultyGet = await Faculty.findById(id);
        if(!oneFacultyGet){
            return res.status(404).json({ message: 'Something Wrong...' });
        }
        res.status(200).json(oneFacultyGet);
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}

// any one data delete from faculty table
const deleteOneFaculty = async(req, res) => {
    try{
        const id = req.params.id;

        const oneFacultyDelete = await Faculty.findByIdAndDelete(id);
        if(!oneFacultyDelete){
            return res.status(404).json({ message: 'Something Wrong...' });
        }
        res.status(200).json(oneFacultyDelete);
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}

// change password
const changePassword = async (req, res) => {
    try {
        const id = req.body._id;
        const oldpassword = req.body.oldpsw;

        const update = {
            "password": req.body.newpsw,
        }

        const object = { returnOriginal: false }

        const facultyget = await Faculty.findById(id);

        if (!facultyget) {
            return res.status(404).json({ message: 'Student not awailable...' });
        } else {
            if (facultyget.password === oldpassword) {
                const facultyUpdate = await Student.findByIdAndUpdate(id, { $set: update }, object);
                if (!facultyUpdate) {
                    return res.status(404).json({ message: 'Something Wrong...' });
                }
                res.status(200).json(facultyUpdate);
            }else{
                return res.status(404).json({ message: 'Old Password Is Wrong...' });
            }
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { addFaculty, getAllFaculty, updateFaculty, getOneFaculty, deleteOneFaculty, changePassword}