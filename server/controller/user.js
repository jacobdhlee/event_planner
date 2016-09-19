const passport = require('passport');
const jwt = require('jsonwebtoken');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Promise = require('bluebird');

const User = require('../model/userModel.js');
const auth = require('../config/auth.js');

const usertoken = auth.usertoken

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey: auth.secret,
}

module.exports = {

  jwtAuth: () => {
    return new JwtStrategy(opts, (playload, done) => {
      User.findById(playload.sub, (err, user) => {
        if(err) {
          return done(err, false)
        }
        if(user) {
          done(null, user)
        } else {
          done(null, false)
        }
      })
    })
  },

  signin: (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;
    User.findOne({username: username}, (err, user) => {
      if(err) {
        next(err)
      } else {
        if(!user) {
          res.json("username is not match")
        } else {
          user.comparedPassword(password)
            .then((foundUser) => {
              res.json({token: usertoken(user)})
              console.log('success recieve token')
            })
            .catch((err) => {
              res.json("password not match")
            })
        }
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
            res.json({token: usertoken(user)})
          }
        })
      }
    })
  }


} 