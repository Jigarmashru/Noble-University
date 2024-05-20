const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');
const visitorRoutes = require('./routes/visitorRoutes');
const facultyRoutes = require('./routes/facultyRoutes');
const loginRoutes = require('./routes/loginRoutes');
const holidayRoutes = require('./routes/holidayRoutes');
const announcementRoutes = require('./routes/announcementRoutes');
const {mongoose} = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// const cors = require('cors');

const corsOptions = {
    credentials: true,
    origin: ['http://localhost:4200', 'http://localhost:80'] // Whitelist the domains you want to allow
};

app.use(cors(corsOptions));
// app.use(cors());

mongoose.connect('mongodb://0.0.0.0:27017/nu', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/students', studentRoutes);
app.use('/visitors', visitorRoutes);
app.use('/faculty', facultyRoutes);
app.use('/login', loginRoutes);
app.use('/holiday', holidayRoutes);
app.use('/announcement', announcementRoutes);

app.listen(PORT,() =>{
    console.log(`Hello Please check Node is On ${PORT}`);
})