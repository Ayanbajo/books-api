const express = require('express')
const Books = require('../models/books.js')
const books = express.Router()
const Book = require('../models/books.js')


books.get('/seed', (req, res) => {
    Book.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "Wâˆ€RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})

//GET ROUTE
books.get('/', (req, res) => {
     Book.find()
     .then(foundBooks => {
         res.json(foundBooks)
     })
        .catch(err => {
            res.json(error404)
     })
})

// GET ROUTE BY TITLE
books.get('/:id', (req, res) => {
    Book.findOne()
    .then(foundBooks => {
        res.json(foundBooks)
    })
       .catch(err => {
           res.json(error404)
    })
})

// CREATE ROUTE
books.post('/', (req, res) => {
    Books.create()
    .then(foundBooks => {
        res.json(foundBooks)
    })
       .catch(err => {
           res.json(error404)
    })
})

//UPDATE ROUTE
books.put('/:id', (req, res) => {
    Book.findOneAndUpdate()
    .then(foundBooks => {
        res.json(foundBooks)
    })
       .catch(err => {
           res.json(error404)
    })
})

//DELETE ROUTE
books.delete('/:id', (req, res) => {
    Books.findOneAndDelete()
    .then(foundBooks => {
        res.json(foundBooks)
    })
       .catch(err => {
           res.json(error404)
    })
})

module.exports = books





