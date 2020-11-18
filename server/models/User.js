const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    min: [4, 'Too short, min 4 characters are required'],
    max: [32, 'Too long, max 16 characters are required']
  },
  userType: {
    type: String
  },
  email: {
    type: String,
    min: [4, 'Too short, min 4 characters are required'],
    max: [32, 'Too long, max 16 characters are required'],
    lowercase: true,
    unique: true,
    required: 'Email is required',
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
  },
  password: {
    type: String,
    min: [4, 'Too short, min 4 characters are required'],
    max: [32, 'Too long, max 16 characters are required'],
    required: 'password is required'
  },
  passwordConfirmation: {
    type: String,
    min: [4, 'Too short, min 4 characters are required'],
    max: [32, 'Too long, max 16 characters are required']
  }
  
});

// userSchema.pre('save', function (next) {
//   const user = this
//   bcrypt.genSalt(10, function (err, salt) {
//     if (err) {
//       return res.status(422).json({
//         'error': 'There is an error while gensalt hash'
//       })
//     }
//     bcrypt.hash(user.password, salt, function (err, hash) {
//       if (err) {
//         return res.status(422).json({
//           'error': 'There is an error while password hash'
//         })
//       }
//       user.password = hash
//       next()
//     })
//   })
// })

userSchema.methods.hasSamePassword = function (password) {
  if (password == this.password) {
    return true;
  }
  else {return false;}
}

module.exports = mongoose.model('User', userSchema)