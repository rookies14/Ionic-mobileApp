const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobSchema = new Schema({
    Name: { type: String, required: true},
    Max: { type: Number, required: true},
    Transcript: { type: Number, required: true},
    Date: { type: String, required: true},
    Location: { type: String, required: true},
    Now: {type: Number,required: true}
},{
    timestamps: true,
});

const job = mongoose.model('job',jobSchema);

module.exports = job;