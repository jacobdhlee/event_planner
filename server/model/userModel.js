const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Promise = require('bluebird');

var Schema = mongoose.Schema;
const saltRound = 10;

var UserSchema = new Schema({

  username: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  profile: {
    name: {
      type: String,
      default: '',
    },
    phoneNumber: {
      type: Number,
    },
    eventOrg: {
      type: Array,
    }
  }
})

UserSchema.pre('save', function (next) {
  var user = this;
  if( !user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(saltRound, (err, salt) => {
    if(err) {
      next(err)
    }
    bcrypt.hash(user.password, salt, (err, hash) =>{
      if(err) {
        next(err)
      }
      user.password = hash;
      next();
    })
  })
})

UserSchema.methods.comparedPassword = function(password) {
  var savedPassword = this.password;
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, savedPassword, (err, isMatch) => {
      if(err) {
        reject(err);
      }
        resolve(isMatch);
    })
  })
}



module.exports = mongoose.model('User', UserSchema)











