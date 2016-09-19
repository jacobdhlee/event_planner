const passport = require('passport');
const auth = require('./auth.js');
const userController = require('../controller/user.js');

passport.use('jwt', userController.jwtAuth)
const requireAuth = passport.authenticate('jwt', auth.session);

module.exports = (app, express) => {
  
  app.get('/login', requireAuth, function (req, res){
    res.send('log in haha')
  }, userController.jwtAuth)

  app.post('/signin', userController.signin)
  app.post('/signup', userController.signup)
}