const mongoose = require('mongoose')

const InfoComponentSchema = new mongoose.Schema({
    name: { type: String , required: true},
    imgURL: { type: String , required: true},
    gitURL: { type: String , required: true},
    language: { type: String , required: true},
    description: { type: String , required: true},
    status: { type: Boolean , required: true}
});

module.exports = mongoose.model('InfoComponent', InfoComponentSchema)