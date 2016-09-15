var userControlloer = require('../model/users/userController.js');

module.exports = function(app, express) {
  app.post('/signup', userControlloer.signup)
}