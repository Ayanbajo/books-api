require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT
const app = express()




app.get('/', (req, res) => {
    res.send('Welcome to the BOOKS API!')
  })

app.get('*', (req, res) => {
    res.send('404')
  })

const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)

app.use(express.json())

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

app.listen(PORT, () => {
    console.log('Greetings! From port: ', PORT);
  })