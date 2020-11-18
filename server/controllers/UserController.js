const User = require('../models/User')
const env = require('../DB')
const jwt = require('jsonwebtoken')
var UserModel = require("../models/User.js");

exports.GetUserInfoFromDb = (req,res)=> {
  UserModel.find({},(err,data)=> {
    if (err) throw err;
    res.json(data);
  })
}

exports.DeleteUser = (req,res)=> {
  var deleteName = req.params.username;
  UserModel.deleteOne({username:deleteName}, (err,result)=> {
    if(err) throw err;
    if(result.deletedCount>0) {
      res.json({"msg":"User deleted successfully."});
    } else {
      res.json({"msg":"User not present."});
    }
  })
}

exports.AddUser = (req,res)=> {
  let newUser = new UserModel({
    username:req.body.username,
    userType:req.body.userType,
    email:req.body.email,
    password:req.body.password
  });

  newUser.save((err,result)=> {
    if(err){
      res.json({"msg":err})
    }

    res.json({"msg":"User added successfully"});
    console.log('works');
  })
}

exports.UpdateUser = (req,res)=> {
  
  var updateUsername = req.body.username;
  var updateUserType = req.body.userType;
  var updateEmail = req.body.email;
  var updatePassword = req.body.password;
  
  UserModel.updateOne({username:updateUsername},{$set:{username:updateUsername,
              userType:updateUserType, email:updateEmail, password:updatePassword}},
              (err,result)=> {
                if(err) throw err;
                res.json({"msg":"Record updated successfully"});
              })
}

exports.register = function (req, res) {
  const { username, userType, email, password, passwordConfirmation } = req.body
  if (!email || !password) {
    return res.status(422).json({ 'error': 'Please provide email or password' })
  }

  if (password != passwordConfirmation) {
    return res.status(422).json({ 'error': 'Password does not match' })
  }
  User.findOne({ email }, function (err, existingUser) {
    if (err) {
      return res.status(422).json({ 'error': 'Oops! Something went Wrong' })
    }
    if (existingUser) {
      return res.status(422).json({ 'error': 'User already exists' })
    }
    else {
      const user = new User({
        username, userType, email, password
      })

      user.save(function (err) {
        if (err) {
          return res.status(422).json({
            'error': 'Oops! Something went wrong'
          })
        }
        return res.status(200).json({ 'registered': true })
      })
    }
  })
 }
exports.login = function (req, res) { 
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(422).json({ 'error': 'Please provide email or password' })
  }
  User.findOne({ email }, function (err, user) {
    if (err) {
      return res.status(422).json({
        'error': 'Oops! Something went wrong'
      })
    }

    if (!user) {
      return res.status(422).json({ 'error': 'Invalid user' })
    }

    if (user.hasSamePassword(password)) {
      json_token = jwt.sign(
        {
          userId: user.id,
          username: user.username
        },
        env.secret,
        { expiresIn: '1h' })

      return res.json(json_token)
    }
    else {
      return res.status(422).json({ 'error': 'Wrong email or password' })
    }
  })
}

exports.authMiddleware = function (req, res, next) {
  const json_token = req.headers.authorization
  try {
    if (json_token) {
      const user = parseToken(json_token)
      User.findById(user.userId, function (err, user) {
        if (err) {
          return res.status(422).json({
            'error': 'Oops! Something went wrong'
          })
        }
        if (user) {
          res.locals.user = user
          next()
        }
        else {
          return res.status(422).json({ 'error': 'Not authorized user' })
        }
      })
    }
    else {
      return res.status(422).json({ 'error': 'Not authorized user' })
    }
  } catch (err) {
    res.status(403).json({
      success: false,
      message: err
    })
  }
}

function parseToken(token) {
  return jwt.verify(token.split(' ')[1], env.secret)
}


