var http = require('http');
var express = require('express');
var app = express();
var routes = require('./routes');
var path = require('path');
var dust = require('dustjs-linkedin');
dust.helpers = require('dustjs-helpers');
var cons = require('consolidate');

app.engine('dust', cons.dust);
app.configure(function() {
	app.set('template_engine', 'dust');
	app.set('views', __dirname + '/views');
	app.set('view engine', 'dust');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.json());
	app.use(express.urlencoded());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(require('less-middleware')({ src: __dirname + '/public' }));
	app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
	app.use(express.errorHandler());
});

app.get('/', routes.index);

app.get('/buying', routes.buying);
app.get('/buying/item/:id', routes.buyingItem);

app.get('/selling', routes.selling);

app.get('/renting', routes.renting);

app.get('/finance', routes.finance);

app.get('/contacts', routes.contacts);

http.createServer(app).listen(8000, function(){
  console.log("Express server listening on port " + 8000);
});