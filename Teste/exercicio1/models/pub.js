const mongoose = require('mongoose')

var pubSchema = new mongoose.Schema({
    _id: String,
    id: String,
    type: String,
    authors: [String],
    title: String,
    booktitle: String,
    address: String,
    year: String,
    month: String,
    doi: String
})

module.exports = mongoose.model('teste', pubSchema)
