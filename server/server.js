const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const routes = require('./config/routes.js');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');

const auth = require('./config/auth.js')

mongoose.connect(auth.db, (err) => {
  if(err) { 
    console.log(err) 
  } else { 
    console.log('connected database') 
  }
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('client'));
app.use(passport.initialize())
app.use(passport.session())
app.use(flash());

routes(app, express);


app.listen(3000, () => {
  console.log('listening port 3000');
})

module.exports = app;