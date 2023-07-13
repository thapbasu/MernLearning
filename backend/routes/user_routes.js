const User = require('../model/user_model'); //model define
const express = require('express');
var bcrypt = require('bcryptjs');
const router = express.Router(); //router feature taken from express
var jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

//create method
router.post('/register', upload.single('avatar'), (req, res) => {
  const username1 = req.body.username; //req data
  const email1 = req.body.email;
  const password1 = req.body.password;
  const userType1 = req.body.userType;
  const avatar2 = req.file.filename;
  //validation
  if (!username1 || !email1 || !password1 || !userType1) {
    return res.status(422).json({ message: 'data empty' });
  }
  //password hash
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password1, salt, function (err, hash) {
      // Store hash in your password DB.
      //object create
      const user = new User({
        username: username1,
        avatar: avatar2,
        email: email1,
        password: hash,
        userType: userType1,
      });
      user.save(); //saving in user database
      res.status(200).json({ message: 'successful' });
    });
  });
});

router.post('/login', (req, res) => {
  const email1 = req.body.email;
  const password1 = req.body.password;
  //database email check
  User.findOne({ email: email1 })
    .then((result) => {
      if (result === null) {
        return res.status(401).json({ message: 'email not matched' });
      }

      //hash password compared with passworddatabase
      bcrypt.compare(password1, result.password, function (err, result2) {
        // res === true
        if (!result2) {
          return res.status(401).json({ message: 'password doesnt matched' });
        }
        var token2 = jwt.sign({ userid: result._id }, 'secretkey'); //creating token
        res.status(200).json({
          message: 'login successful',
          token: token2,
          userType: result.userType,
        });
      });
    })
    .catch((error) => {
      req.status(500).json({ message: error.message });
    });
});
// auth.verifyLogin, auth.verifyAdmin,
//read method
router.get('/userall', auth.verifyLogin, auth.verifyAdmin, (req, res) => {
  User.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(() => {
      res.status(500).json({ error: error.message });
    });
});
//show single user
router.get('/usersingle/:id', (req, res) => {
  const id = req.params.id;
  User.findOne({ _id: id })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});
//delete
router.delete('/deleteuser/:id', (req, res) => {
  const id2 = req.params.id;
  User.deleteOne({ _id: id2 })
    .then((result) => {
      res.status(200).json({ message: 'delete successful' });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
      console.log(error);
    });
});

//update

router.put('/updateOne/:id', auth.verifyLogin, auth.verifyAdmin, (req, res) => {
  const email1 = req.body.email;
  const password1 = req.body.password;
  const username1 = req.body.username;
  const id = req.params.id;
  const userType1 = req.body.userType;

  User.updateOne(
    { _id: id },
    {
      email: email1,
      password: password1,
      username: username1,
      userType: userType1,
    }
  )
    .then(() => {
      res.status(200).json({ message: 'update successful' });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});
router.put('/logout', auth.verifyLogin, (req, res) => {
  const token = req.headers.authorization;
  jwt.sign(token, '', { expiresIn: 1 }, (logout) => {
    if (logout) {
      res.status(200).json({ message: 'logout successful' });
    } else {
      res.status(500).json({ err: 'logout failed' });
    }
  });
});
module.exports = router;
