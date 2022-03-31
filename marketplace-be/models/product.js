const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    dateAdded: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Product', productSchema)