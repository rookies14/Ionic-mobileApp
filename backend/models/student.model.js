const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    Name: { type: String, required: true},
    StudentID: { type: String, required: true},
    Faculty: { type: String, required: true},
    Email: { type: String, required: true},
    Password: { type: String, required: true},
},{
    timestamps: true,
});

const student = mongoose.model('student',studentSchema);

module.exports = student;