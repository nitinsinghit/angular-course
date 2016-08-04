var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');

var app = express();

var contactInfo = require('./database/contact-info.json');

app.use(bodyParser.json());
app.use(cors());

app.get('/contact', function (req, res) {
  console.log('Contact pinged');
  res.json(contactInfo);
  //res.send(contactInfo);
});

// Make changes for the ruter app
app.get('/sample', function (req, res) {
  var time = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
  var options = {
    url: 'http://reisapi.ruter.no/StopVisit/GetDepartures/3010648?datetime=' + time,
    method: 'GET',
    json: true
  };
  request(options, function (error, response, body) {
    res.json(body);
  });
});

app.post('/message', function (req, res) {
  console.log(req.body);
  res.send(true);
});

app.use('/', express.static(__dirname + '/public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
