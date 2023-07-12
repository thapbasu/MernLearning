const express = require('express');
const connectdb = require('./db/db');
const user_route = require('./routes/user_routes');
const cors = require('cors');
const path = require('path');
const travel_route = require('./routes/travel_routes');

var bodyParser = require('body-parser');
const app = express();
connectdb();
app.use(express.json()); //json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static(path.join(__dirname, 'files'))); //file path
app.use(cors()); //permission
app.use(user_route); //route use from express
app.use(travel_route);
app.get('/', function (req, res) {
  res.send('Hello World');
});
app.get('/header', function (req, res) {
  res.send('Hello header');
});
app.get('/body', function (req, res) {
  res.send('Hello Body');
});
app.listen(4000, function () {
  console.log('its running at 4000 port.');
});
