const Travel = require('../model/travel_model'); //model define
const express = require('express');
const router = express.Router(); //router feature taken from express
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

//create method
router.post('/TravelRegister', upload.single('avatar'), (req, res) => {
  const username1 = req.body.username; //req data
  const password1 = req.body.password;
  const travel_destination1 = req.body.travel_destination;
  const travel_budget1 = req.body.travel_budget;
  const travel_duration1 = req.body.travel_duration;
  const user_type1 = req.body.user_type;
  const avatar2 = req.file.path;
  //validation
  if (
    !username1 ||
    !password1 ||
    !travel_destination1 ||
    !travel_budget1 ||
    !travel_duration1 ||
    !user_type1
  ) {
    return res.status(422).json({ message: 'data empty' });
  }
  //password hash
  // Store hash in your password DB.
  //object create
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password1, salt, function (err, hash) {
      const travel1 = new Travel({
        username: username1,
        avatar: avatar2,
        password: hash,
        travel_destination: travel_destination1,
        travel_budget: travel_budget1,
        travel_duration: travel_duration1,
        user_type: user_type1,
      });

      travel1.save(); //saving in user database
      res.status(200).json({ message: 'successful' });
    });
  });
});

router.post('/TravelLogin', (req, res) => {
  const username1 = req.body.username;
  const password1 = req.body.password;
  //database email check
  Travel.findOne({ username: username1 })
    .then((result) => {
      if (result === null) {
        return res.status(401).json({ message: 'username not matched' });
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
        });
      });
    })
    .catch((error) => {
      req.status(500).json({ message: error.message });
    });
});

// read method
router.get('/userall', auth.verifyLogin, auth.verifyAdmin, (req, res) => {
  Travel.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(() => {
      res.status(500).json({ error: error.message });
    });
});
//delete
router.delete('/deleteuser/:id', (req, res) => {
  const id2 = req.params.id;
  Travel.deleteOne({ _id: id2 })
    .then((result) => {
      res.status(200).json({ message: 'delete successful' });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
      console.log(error);
    });
});

// //update

router.put('/updateOne', (req, res) => {
  const id = req.body.id;
  const username1 = req.body.username; //req data
  const password1 = req.body.password;
  const travel_destination1 = req.body.travel_destination;
  const travel_budget1 = req.body.travel_budget;
  const travel_duration1 = req.body.travel_duration;
  const user_type1 = req.body.user_type;

  Travel.updateOne(
    { _id: id },
    {
      username: username1,
      password: password1,
      travel_destination: travel_destination1,
      travel_budget: travel_budget1,
      travel_duration: travel_duration1,
      user_type: user_type1,
    }
  )
    .then(() => {
      res.status(200).json({ message: 'update successful' });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});
module.exports = router;
