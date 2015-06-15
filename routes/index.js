exports.index = function(req, res){
	res.render('layout');
};

exports.partials = function (req, res) {
	var name = req.params.name;
	console.log(name);
	res.sendfile('partials/' + name);
};