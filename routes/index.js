// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);

	if(req.params.id) {
		//filter out the id
		console.log("id is " + id);
	}
	res.render('index', data);
};