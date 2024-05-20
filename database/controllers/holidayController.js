const Holiday = require('../models/holidayModel');

//add holiday
const addHoliday = async (req, res) => {
    try {
        let data = {
            "name": req.body.name,
            "fromdate": req.body.fromdate,
            "todate": req.body.todate,
            "description": req.body.description
        }
        const holiday = await Holiday.insertMany(data);
        res.status(200).json(holiday);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// get all holiday
const getAllHoliday = async (req, res) => {
    try {
        const getHoliday = await Holiday.find();
        res.status(200).json(getHoliday);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// delete holiday
const deleteOneHoliday = async(req, res) => {
    try{
        const id = req.params.id;

        const oneHolidayDelete = await Holiday.findByIdAndDelete(id);
        if(!oneHolidayDelete){
            return res.status(404).json({ message: 'Something Wrong...' });
        }
        res.status(200).json(oneHolidayDelete);
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}


module.exports = { addHoliday, getAllHoliday, deleteOneHoliday };