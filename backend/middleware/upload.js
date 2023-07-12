const multer = require('multer');

//image file storage location
const storage = multer.diskStorage({
  //file location set
  destination: function (req, file, cb) {
    cb(null, './files');
  },
  //filename set
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

//validation

const upload = multer({ storage: storage });
module.exports = upload;
