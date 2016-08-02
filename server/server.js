var express = require('express');
var app = express();

var contactInfo = require('./database/contact-info.json');

console.log(__dirname);
app.get('/contact', function (req, res) {
  res.send(contactInfo);
});

app.use('/', express.static(__dirname + '/public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
