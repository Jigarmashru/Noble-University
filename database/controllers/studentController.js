const Student = require('../models/studentModel');
const Student_Certificate = require('../models/studentCertificateModel');
const Student_Complaint = require('../models/studentComplaintModel');
const Student_Feedback_For_Faculty = require('../models/studentFeedbackForFacultyModel')
const Student_Leave = require('../models/studentLeaveModel')

//get all student details (Student)
const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//get one student details by id (Student)
const getStudentById = async (req, res) => {
    try {
        const id = req.params.id;

        const onestudent = await Student.findById(id);

        if (!onestudent) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(onestudent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//add student (Student)
const addStudent = async (req, res) => {
    // console.log(req.body)
    try {
        let data = {
            "name": req.body.name,
            "semester": req.body.sem,
            "studentpno": req.body.spno,
            "email": req.body.mail,
            "adharcardno": req.body.adharno,
            "dob": req.body.dob,
            "password": req.body.psw,
            "attendence": req.body.attendence,
            "birthplace": req.body.bplace,
            "fatherdesignation": req.body.fdesignation,
            "mothername": req.body.mname,
            "motherpno": req.body.mpno,
            "hobbies": req.body.hobby,
            "bloodgroup": req.body.bloodgroup,
            "fatherpno": req.body.fpno,
            "rno": req.body.rno,
            "presentadd": req.body.presentadd,
            "permananentadd": req.body.permananentadd,
            "city": req.body.city,
            "fathername": req.body.fname,
            "gender": req.body.gender,
            "category": req.body.category,
            "faculty": req.body.faculty,
            "country": req.body.country,
            "department": req.body.department,
            "program": req.body.program,
            "admissionno": req.body.admissionno,
            "enrollmentno": req.body.enrollno,
            "admissionyear": req.body.ayear,
            "admissiontype": req.body.atype,
            "state": req.body.state,
            "pincode": req.body.pincode,
            "post": req.body.post
        }
        const students = await Student.insertMany(data);
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// update any column in student table (Student)
const updateStudent = async (req, res) => {
    try {
        const id = req.body._id;

        const update = {
            "name": req.body.name,
            "semester": req.body.sem,
            "studentpno": req.body.spno,
            "email": req.body.email,
            "adharcardno": req.body.adharno,
            "dob": req.body.dob,
            "password": req.body.psw,
            "attendence": req.body.attendence,
            "birthplace": req.body.birthplace,
            "fatherdesignation": req.body.fatherdesignation,
            "mothername": req.body.mnm,
            "motherpno": req.body.mpno,
            "hobbies": req.body.hobbies,
            "bloodgroup": req.body.bloodgroup,
            "fatherpno": req.body.fpno,
            // "rno":,
            "presentadd": req.body.permananentadd,
            "permananentadd": req.body.presentadd,
            "city": req.body.city,
            "fathername": req.body.fnm,
            "gender": req.body.gender,
            "category": req.body.category,
            "faculty": req.body.faculty,
            "country": req.body.country,
            "department": req.body.department,
            "program": req.body.program,
            // "admissionno": req.body.ano,
            // "enrollmentno":,
            // "admissionyear":,
            "admissiontype": req.body.atype,
            "state": req.body.state,
            "pincode": req.body.pincode
            // "post": req.body.post
        }

        const object = { returnOriginal: false }

        const studentUpdate = await Student.findByIdAndUpdate(id, { $set: update }, object);
        if (!studentUpdate) {
            return res.status(404).json({ message: 'Something Wrong...' });
        }
        res.status(200).json(studentUpdate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// any one data delete from faculty table (Student)
const deleteOneStudent = async (req, res) => {
    try {
        const id = req.params.id;

        const oneStudentDelete = await Student.findByIdAndDelete(id);
        if (!oneStudentDelete) {
            return res.status(404).json({ message: 'Something Wrong...' });
        }
        res.status(200).json(oneStudentDelete);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// change password any column in student table (Student)
const changePassword = async (req, res) => {
    try {
        const id = req.body._id;
        const oldpassword = req.body.oldpsw;

        const update = {
            "password": req.body.newpsw,
        }

        const object = { returnOriginal: false }

        const studentget = await Student.findById(id);

        if (!studentget) {
            return res.status(404).json({ message: 'Student not awailable...' });
        } else {
            if (studentget.password === oldpassword) {
                const studentUpdate = await Student.findByIdAndUpdate(id, { $set: update }, object);
                if (!studentUpdate) {
                    return res.status(404).json({ message: 'Something Wrong...' });
                }
                res.status(200).json(studentUpdate);
            }else{
                return res.status(404).json({ message: 'Old Password Is Wrong...' });
            }
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



//add certificate application by student (Student_Certificate)
const applicationOfCertificate = async (req, res) => {
    try {
        let data = {
            "name": req.body.name,
            "enrollmentno": req.body.enrollno,
            "certificate": req.body.certi,
            "purposecertificate": req.body.purposecerti
        }
        const studentsCertificate = await Student_Certificate.insertMany(data);
        res.status(200).json(studentsCertificate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// get all certificate data (Student_Certificate)
const getAllCertificate = async (req, res) => {
    try {
        const studentsCertificate = await Student_Certificate.find();
        res.status(200).json(studentsCertificate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// delete certificate data by id (Student_Certificate)
const deleteOneCertificate = async (req, res) => {
    try {
        const id = req.params.id;

        const oneCertificateDelete = await Student_Certificate.findByIdAndDelete(id);
        if (!oneCertificateDelete) {
            return res.status(404).json({ message: 'Something Wrong...' });
        }
        res.status(200).json(oneCertificateDelete);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



//add complaint (greviance) application by student (Student_Complaint)
const applicationOfComplaint = async (req, res) => {
    try {
        let data = {
            "name": req.body.name,
            "enrollmentno": req.body.enrollno,
            "complaint": req.body.complaint,
            "subcomplaint": req.body.subcomplaint,
            "description": req.body.description
        }
        const studentsComplaint = await Student_Complaint.insertMany(data);
        res.status(200).json(studentsComplaint);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//get all complaint (greviance) application by student (Student_Complaint)
const getAllComplaint = async (req, res) => {
    try {
        const studentsComplaint = await Student_Complaint.find();
        res.status(200).json(studentsComplaint);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//get one complaint (greviance) by id application by student (Student_Complaint)
const getComplaintById = async (req, res) => {
    try {
        const enrollno = req.params.enrollno;

        const getOneComplaint = await Student_Complaint.find({ enrollmentno: enrollno });

        if (!getOneComplaint) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(getOneComplaint);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//delete one complaint (greviance) application by student (Student_Complaint)
const deleteOneComplaint = async (req, res) => {
    try {
        const id = req.params.id;

        const oneComplaintDelete = await Student_Complaint.findByIdAndDelete(id);
        if (!oneComplaintDelete) {
            return res.status(404).json({ message: 'Something Wrong...' });
        }
        res.status(200).json(oneComplaintDelete);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



// add feedback for faculty application by student (Student_Feedback_For_Faculty)
const applicationOfFeedback = async (req, res) => {
    try {
        let data = {
            "name": req.body.name,
            "enrollmentno": req.body.enrollno,
            "facultyname": req.body.fname,
            "subjectname": req.body.subname,
            "feedback": req.body.feedback
        }
        const studentsFeedbackForFaculty = await Student_Feedback_For_Faculty.insertMany(data);
        res.status(200).json(studentsFeedbackForFaculty);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//get all feedback for faculty application by student (Student_Feedback_For_Faculty)
const getAllFeedback = async (req, res) => {
    try {
        const studentsFeedback = await Student_Feedback_For_Faculty.find();
        res.status(200).json(studentsFeedback);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//get one feedback by id for faculty application by student (Student_Feedback_For_Faculty)
const getFeedbackById = async (req, res) => {
    try {
        const enrollno = req.params.enrollno;

        const getOneFeedback = await Student_Feedback_For_Faculty.find({ enrollmentno: enrollno });

        if (!getOneFeedback) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(getOneFeedback);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//delete one feedback for faculty application by student (Student_Feedback_For_Faculty)
const deleteOneFeedback = async (req, res) => {
    try {
        const id = req.params.id;

        const oneFeedbackDelete = await Student_Feedback_For_Faculty.findByIdAndDelete(id);
        if (!oneFeedbackDelete) {
            return res.status(404).json({ message: 'Something Wrong...' });
        }
        res.status(200).json(oneFeedbackDelete);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



// add leave application by student (Student_Leave)
const applicationOfLeave = async (req, res) => {
    try {
        let data = {
            "name": req.body.name,
            "enrollmentno": req.body.enrollno,
            "remarks": req.body.remarks,
            "kindofleave": req.body.kindofleave,
            "leavetype": req.body.leavetype,
            "fromdate": req.body.fromdate,
            "todate": req.body.todate
        }
        const studentsLeave = await Student_Leave.insertMany(data);
        res.status(200).json(studentsLeave);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//get all leave application by student (Student_Leave)
const getAllLeave = async (req, res) => {
    try {
        const studentsLeave = await Student_Leave.find();
        res.status(200).json(studentsLeave);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//get one leave application by student help of id(Student_Leave)
const getLeaveById = async (req, res) => {
    try {
        const enrollno = req.params.enrollno;

        const getOneLeave = await Student_Leave.find({ enrollmentno: enrollno });

        if (!getOneLeave) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(getOneLeave);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//delete one leave application by student (Student_Leave)
const deleteOneLeave = async (req, res) => {
    try {
        const id = req.params.id;

        const oneLeaveDelete = await Student_Leave.findByIdAndDelete(id);
        if (!oneLeaveDelete) {
            return res.status(404).json({ message: 'Something Wrong...' });
        }
        res.status(200).json(oneLeaveDelete);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = { getAllStudents, getStudentById, addStudent, updateStudent, deleteOneStudent, changePassword, applicationOfCertificate, getAllCertificate, deleteOneCertificate, applicationOfComplaint, deleteOneComplaint, getComplaintById, getAllComplaint, applicationOfFeedback, getAllFeedback, getFeedbackById, deleteOneFeedback, applicationOfLeave, getAllLeave, getLeaveById, deleteOneLeave };


//for find any one data by any colum that time it is used findOne({ gmail_id: gmailId })