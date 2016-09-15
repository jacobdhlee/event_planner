const User = require('./userModel.js');
const Promise = require('bluebird');

module.exports = {
  signup: (req, res ,next) => {
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;

    User.findOne({username: req.body.username}, (err, existed) => {
      if(existed) {
        console.log('hi ' + req.body.username +' you have already created account')
      } else {
        user.save((err, user) => {
          if(err) {
            next(err)
          } else {
            res.json({})
          }
        })
      }
    })
  }
}