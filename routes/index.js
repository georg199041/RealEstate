exports.index = function(req, res){  
	res.render('index', { 
		title: 'Index main Page',
		homes: [{
			name: 'Homes for sale',
		},{
			name: 'Flats for sale'
		}]
	});
};

exports.buying = function(req, res){  
	res.render('buying', { title: 'Buying Page' });
};

exports.contacts = function(req, res){  
	res.render('contacts', { title: 'Contacts Page' });
};

exports.finance = function(req, res){  
	res.render('finance', { title: 'Finance Page' });
};

exports.renting = function(req, res){  
	res.render('renting', { title: 'Renting Page' });
};

exports.selling = function(req, res){  
	res.render('selling', { title: 'Selling Page' });
};