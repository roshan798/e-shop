const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    // Add other fields as needed
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category
