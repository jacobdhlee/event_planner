const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/event', (err) => {
  if(err) { 
    console.log(err) 
  } else { 
    console.log('connected database') 
  }
});

app.use(express.static('client'));
app.use(morgan('dev'));


app.listen(3000, () => {
  console.log('listening port 3000');
})