var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

var contactInfo = require('./database/contact-info.json');

app.use(bodyParser.json());
app.use(cors());

app.get('/contact', function (req, res) {
  console.log('Contact pinged');
  res.json(contactInfo);
  //res.send(contactInfo);
});

app.post('/message', function (req, res) {
  console.log(req.body);
});

app.use('/', express.static(__dirname + '/public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
