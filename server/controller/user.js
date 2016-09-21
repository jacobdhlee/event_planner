const Promise = require('bluebird');
const User = require('../model/userModel.js');
const auth = require('../config/auth.js');

const usertoken = auth.usertoken

module.exports = {

  signin: (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;
    User.findOne({username: username}, (err, user) => {
      if(err) {
        return next(err)
      } else {
        if(!user) {
          res.json("username is not match")
        } 
        return user.comparedPassword(password)
          .then((foundUser) => {
            if(foundUser){
              res.json({token: 'JWT ' + usertoken(user)})
              console.log('success recieve token')
            } else {
              res.send('Password is not a match')
            }
          })
          .catch((err) => {
            res.json("Username is not match")
          })
      }
    })
  },


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
            res.json({success: true, message: 'Thank you for register! please log in'})
          }
        })
      }
    })
  }


} 