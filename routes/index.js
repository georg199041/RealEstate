exports.index = function(req, res){  
	res.render('index', { 
		title: 'Index main Page',
		homes: [{
			name: 'Homes for sale',
		},{
			name: 'Flats for sale'
		}], 
		menu: [ {link: '', name: 'Main'}, {link: 'buying', name: 'Buying'}, {link: 'selling', name: 'Selling'}, {link: 'renting', name: 'Renting'}, {link: 'finance', name: 'Finance'}, {link: 'contacts', name: 'Contacts'}]
	});
};

exports.buying = function(req, res){  
	res.render('buying', { title: 'Buying Page', menu: [ {link: '', name: 'Main'}, {link: 'buying', name: 'Buying'}, {link: 'selling', name: 'Selling'}, {link: 'renting', name: 'Renting'}, {link: 'finance', name: 'Finance'}, {link: 'contacts', name: 'Contacts'}] });
};

exports.contacts = function(req, res){  
	res.render('contacts', { title: 'Contacts Page', menu: [ {link: '', name: 'Main'}, {link: 'buying', name: 'Buying'}, {link: 'selling', name: 'Selling'}, {link: 'renting', name: 'Renting'}, {link: 'finance', name: 'Finance'}, {link: 'contacts', name: 'Contacts'}] });
};

exports.finance = function(req, res){  
	res.render('finance', { title: 'Finance Page', menu: [ {link: '', name: 'Main'}, {link: 'buying', name: 'Buying'}, {link: 'selling', name: 'Selling'}, {link: 'renting', name: 'Renting'}, {link: 'finance', name: 'Finance'}, {link: 'contacts', name: 'Contacts'}] });
};

exports.renting = function(req, res){  
	res.render('renting', { title: 'Renting Page', menu: [ {link: '', name: 'Main'}, {link: 'buying', name: 'Buying'}, {link: 'selling', name: 'Selling'}, {link: 'renting', name: 'Renting'}, {link: 'finance', name: 'Finance'}, {link: 'contacts', name: 'Contacts'}] });
};

exports.selling = function(req, res){  
	res.render('selling', { title: 'Selling Page', menu: [ {link: '', name: 'Main'}, {link: 'buying', name: 'Buying'}, {link: 'selling', name: 'Selling'}, {link: 'renting', name: 'Renting'}, {link: 'finance', name: 'Finance'}, {link: 'contacts', name: 'Contacts'}] });
};