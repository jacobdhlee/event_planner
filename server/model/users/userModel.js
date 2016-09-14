const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Promise = require('bluebird');

var Schema = mongoose.Schema;

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