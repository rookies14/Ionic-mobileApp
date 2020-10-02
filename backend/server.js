const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

const server = express();
const port = process.env.PORT || 5001;
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    entended: true
}))
server.use(cors());
server.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true}
);
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB database connected successfully")
});

{/*const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');*/}
const jobRouter = require('./routes/jobs');
const registerRouter = require('./routes/registers');
const studentRouter = require('./routes/students');

{/*server.use('/exercises', exercisesRouter);
server.use('/users', usersRouter);*/}
server.use('/jobs',jobRouter);
server.use('/registers',registerRouter);
server.use('/students',studentRouter);

const app = server.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
});
