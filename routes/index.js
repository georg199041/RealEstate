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
	res.render('buying', { 
		title: 'Buying Page', 
		menu: [{
				link: '', name: 'Main'
			},{
				link: 'buying', name: 'Buying'
			},{
				link: 'selling', name: 'Selling'
			},{
				link: 'renting', name: 'Renting'
			},{
				link: 'finance', name: 'Finance'
			},{
				link: 'contacts', name: 'Contacts'
		}],
		whatsBuying: [{
			date: '25.12.2013',
			type: 'homes',
			img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQcRZZ_L6kDFffZE3_P_ZF6zIYfItoQ2h3IL9Lty2ZyhPELs2QmDw',
			title: 'Куплю жилье даром',
			desc: 'Кто возьмет билетов пачку тот получит водокачку!'
		},{
			date: '15.11.2013',
			type: 'homes',
			img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQhOBWbS6_4fqn2zfQJYO7B1Z9Xd7UrorZMCMVjFHfn6EiKZhSa',
			title: 'Купить жилье по скидке',
			desc: 'Квартира бомба, заходи и живи!'
		},{
			date: '01.10.2013',
			type: 'homes',
			img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT2g_VTiPEl1Yc_D-X4Q5UdbYjx6OrNHJwpDLDpU4y8TiLpzXqN7A',
			title: 'Куплю жилье и маленькую тележку',
			desc: 'Жилье Жилье кому Жилье'
		}]
	});
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