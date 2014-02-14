// Get all of our friend data
var data = require('../data.json');

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