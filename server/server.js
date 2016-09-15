const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./config/routes.js')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/event', (err) => {
  if(err) { 
    console.log(err) 
  } else { 
    console.log('connected database') 
  }
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('client'));

routes(app, express);

app.listen(3000, () => {
  console.log('listening port 3000');
})

module.exports = app;