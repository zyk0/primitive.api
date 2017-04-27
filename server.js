var express = require('express')
var mongoose = require('mongoose');

 
var app = express()
 
app.get('/prostokvashino', function(req, res) {
	var json_string = {"person":[
			{"name":"uncleFedor", "character":"boy"},
            {"name":"Matroskin", "character":"cat"},            
            {"name":"Sharick", "character":"dog"},
            {"name":"Pechkin", "character":"postman"}
			]};
  res.json(json_string)
})
 
app.listen(3000);
console.log('start, port ' + ' 3000');