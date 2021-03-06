// Get all of our friend data
var data = require('../data.json');
var S = require('string');

exports.view = function(req, res){
	//console.log(data);

	var filterData = {category: req.params.category, locations: []};
	//filter out all the regions
	if(req.params.category){
		console.log("category is " + req.params.category);
		console.log(filterData);
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
	//jsonObj.showLabel = true;
	res.render('details', jsonObj);
}
// exports.test = function(req,res){
// 	console.log("name is " + req.params.name);
// 	var jsonObj = {};
// 	//find the correct place
// 	var locationArr = data.locations;
// 	for (var i = 0; i < locationArr.length; i++) {
// 	   	if(locationArr[i].name.toUpperCase() === req.params.name.toUpperCase()){
// 	   		jsonObj = locationArr[i];
	   		
// 	   		break;
// 	   	}
// 	}
// 	jsonObj.showLabel = false;
// 	res.render('details', jsonObj);
// }



exports.update = function(req, res){
	console.log("name : " + req.params.name + ", level: " + req.params.level);

	var place = S(req.params.name).unescapeHTML().s;
	//place = S(place).trim().s;
	var level = S(req.params.level).unescapeHTML().s;
	//level = S(level).trim().s;
	var dateStr = S(req.params.dateStr).unescapeHTML().s;
	console.log("name : " + place + ", level: " + level + ", dateStr: " + dateStr);

	var locationArr = data.locations;
	for (var i = 0; i < locationArr.length; i++) {
	   	if(locationArr[i].name === place){
	   		locationArr[i].level = level;
	   		locationArr[i].dateUpdated = dateStr;
	   		//console.log("debug");
	   		console.log(level);
	  		res.json({
	  			status: 'success',
	  			fullness: level,
	  			dateUpdated: dateStr});
	  		return;
	   	}
	}
	res.json({
	  			status: 'fail'});
	return;
}