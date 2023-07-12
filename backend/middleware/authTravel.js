const Travel = require('../model/travel_model');
const jwt = require('jsonwebtoken');
//login verify
module.exports.verifyLogin = function (req, res, next) {
  const token = req.headers.authorization; //token get token123
  const token_split = token.split(' ')[1]; //token split for verify
  var decoded = jwt.verify(token_split, 'secretkey'); //secretkey check true
  Travel.findOne({ _id: decoded.userid })
    .then((response) => {
      req.UserInfo = response; //store user
      if (req.UserInfo.user_type === 'User') {
        return res.status(200).json(response);
      }

      next(); // code stop and return back
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};
module.exports.verifyAdmin = (req, res, next) => {
  if (!req.UserInfo) {
    return res.status(401).json({ message: 'user not found' });
  } else if (req.UserInfo.user_type !== 'Admin') {
    return res.status(401).json({ message: 'user isnot admin' });
  }
  next();
};
