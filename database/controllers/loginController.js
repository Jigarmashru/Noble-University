const Login = require('../models/loginModel');

// add data in login table
const addData = async (req , res) => {
    try {
        let data = {
            "name": req.body.name,
            "email": req.body.mail,
            "password": req.body.psw,
            "post": req.body.post,
            "id": req.body.id
        }
        const loginData = await Login.insertMany(data);
        res.status(200).json(loginData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// get data from login table by email id
const checkData = async (req , res) => {
    try{
        const loginDataGet = await Login.findOne({ email : req.body.mail });
        if(!loginDataGet){
            return res.status(404).json({ message: 'Please Enter Valid Email' });
        }
        res.status(200).json(loginDataGet);
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}

// update any column in login table
const updateData = async(req, res) => {
    try{
        const checkId = req.body.id;

        const update = {
            "name": req.body.name,
            "email": req.body.mail,
            "password": req.body.psw,
            "post": req.body.post
        }
    
        
        const object = { returnOriginal : false }
        
        const loginDataUpdate = await Login.findOneAndUpdate({id : checkId},{$set : update},object);
        console.log(loginDataUpdate);
        if(!loginDataUpdate){
            return res.status(404).json({ message: 'Something Wrong...' });
        }
        res.status(200).json(loginDataUpdate);
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}

//delete one data from login table
const deleteOneData = async(req, res) => {
    try{
        const studid = req.params.id;

        const oneDataDelete = await Login.findOneAndDelete({id : studid});
        if(!oneDataDelete){
            return res.status(404).json({ message: 'Something Wrong...' });
        }
        res.status(200).json(oneDataDelete);
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}

// change password any column in login table
const changePassword = async (req, res) => {
    try {
        const sid = req.body._id;
        const oldpassword = req.body.oldpsw;

        const update = {
            "password": req.body.newpsw,
        }

        const object = { returnOriginal: false }

        const dataget = await Login.findOne({id : sid});

        if (!dataget) {
            return res.status(404).json({ message: 'Data not awailable...' });
        } else {
            if (dataget.password === oldpassword) {
                const dataUpdate = await Login.findOneAndUpdate({id : sid}, { $set: update }, object);
                if (!dataUpdate) {
                    return res.status(404).json({ message: 'Something Wrong...' });
                }
                res.status(200).json(dataUpdate);
            }else{
                return res.status(404).json({ message: 'Old Password Is Wrong...' });
            }
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { addData, checkData, updateData, deleteOneData, changePassword };