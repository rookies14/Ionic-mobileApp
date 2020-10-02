const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const registerSchema = new Schema({
    Activity: { type: String, required: true},
    StudentId: { type: String, required: true},
},{
    timestamps: true,
});

const register = mongoose.model('register',registerSchema);

module.exports = register;