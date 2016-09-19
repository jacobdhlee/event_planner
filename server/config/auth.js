const jwt = require('jsonwebtoken');
const secret = 'This is Sceret for the jwt haha payload a1b2c3d4e5f6g7h8i9j0';
module.exports = {
  db: 'mongodb://localhost:27017/event',
  session: { session: false },
  usertoken: (user) => {
    const time = new Date().getTime();
    return jwt.sign({sub: user.id, iat: time}, secret, {expiresIn: "12h"})
  }
}