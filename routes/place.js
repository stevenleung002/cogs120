// Get all of our friend data
var data = require('../data.json');
var S = require('string');

exports.view = function(req, res){
	//console.log(data);

	var filterData = {locations: []};
	//filter out all the regions
	if(req.params.category){
		console.log("category is " + req.params.category);

		var locationArr = data.locations;
		for (var i = 0; i < locationArr.length; i++) {
		   	if(locationArr[i].category.toUpperCase() === req.params.category.toUpperCase()){
		   		filterData.locations.push(locationArr[i]);
		   	}
		}
	}

	res.render('place', filterData);
};
exports.details = function(req,res){
	console.log("name is " + req.params.name);
	var jsonObj = {};
	//find the correct place
	var locationArr = data.locations;
	for (var i = 0; i < locationArr.length; i++) {
	   	if(locationArr[i].name.toUpperCase() === req.params.name.toUpperCase()){
	   		jsonObj = locationArr[i];
	   		
	   		break;
	   	}
	}
	res.render('details', jsonObj);
}
exports.update = function(req, res){
	console.log("name : " + req.params.name + ", level: " + req.params.level);

	var place = S(req.params.name).unescapeHTML().s;
	//place = S(place).trim().s;
	var level = S(req.params.level).unescapeHTML().s;
	//level = S(level).trim().s;

	console.log("name : " + place + ", level: " + level);

	var locationArr = data.locations;
	for (var i = 0; i < locationArr.length; i++) {
	   	if(locationArr[i].name === place){
	   		locationArr[i].level = level;
	  		res.json(200, {status: "sucessfully updated!"});
	   	}
	}
}