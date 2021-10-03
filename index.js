const express = require('express');
const path = require('path');
const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true });

app.use(express.static('public'));

app.set('view engine', 'ejs');

PORT = 4000;

app.get('/', (req, res) => {
  res.render('index')
});

app.get('/about', (req, res) => {
  res.render('about')
});

app.get('/contact', (req, res) => {
  res.render('contact')
});

app.get('/post', (req, res) => {
  res.render('post')
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});