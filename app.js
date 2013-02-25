
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});


/* Rutas */
app.get('/', function(req, res){
	res.render('index', {
		title : 'Tecnología Informatica'
	});
});

app.get('/index', function(req, res){
	res.render('index', {
		title : 'Tecnología Informatica'
	});
});

app.get('/historia', function(req, res){
	res.render('historia', {
		title : "Historia de la Informatica"
	});
});

app.get('/origenes', function(req, res){
	res.render('origenes', {
		title : "Origenes de la Informatica"
	});
});

app.get('/manejoinfo', function(req, res){
	res.render('manejoinfo', {
		title : "Manejo de la Informacion"
	});
});

app.get('/contacto', function(req, res){
	res.render('contacto', {
		title : "Contacto"
	});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});








