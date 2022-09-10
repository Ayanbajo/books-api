const express = require('express')
const Books = require('../models/books.js')
const books = express.Router()
const Book = require('../models/books.js')

books.get('/books', (req, res) => {
        res.send('list of books')
})

books.get('/books/:id', (req, res) => {
    Book.findById(req.params.id)

})


module.exports = books


