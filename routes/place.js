// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	//console.log(data);

	if(req.params.region){
		console.log("region is " + req.params.region);


	}
	res.render('place', data);
};