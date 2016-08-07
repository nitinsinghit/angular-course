var request = require('request');

var options = {
  url: 'http://reisapi.ruter.no/StopVisit/GetDepartures/3010648?datetime=2016-08-04T15:00',
  method: 'GET',
  json: true
};


request(options, function (error, response, body) {
  console.log(body);
});
