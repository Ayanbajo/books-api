const mongoose = require('mongoose')
const { Schema } = mongoose

const bookSchema = new Schema ({
        id: {},
        title: {type: String},
        description: {type: String},
        year: {type: Number},
        quantity: {type: Number},
        imageURL:{type: String, default: 'http://placehold.it/500x500.png'} 
})

const Books = mongoose.model('Books', bookSchema)
module.exports = Books