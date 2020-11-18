const express = require('express')
const user = require('../controllers/UserController')
const router = express.Router()


const { authMiddleware } = require('../controllers/UserController')

router.post('/register', user.register)

router.post('/login', user.login)

router.get('/profile', authMiddleware, function (req, res) {
  res.json({ 'access': true })
})

//display all users
router.get("/usersFromDb", user.GetUserInfoFromDb);

//delete user
router.delete("/deleteUserByName/:username", user.DeleteUser);

//add user
router.post("/addNewUser", user.AddUser);

//update user
router.put("/updateUser", user.UpdateUser);
module.exports = router