var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');
var swig = require('swig');
var cons = require('consolidate');
require('./client/js/app/routes.js')(app);

app.configure(function() {
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	app.use(app.router);

	//Static Content and View
	app.engine('.html', cons.swig);
	app.set('view engine', 'html');
	app.use(express.static(path.resolve(__dirname, 'client')));
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
  var addr = server.address();
  console.log("Server listening at ", addr.address + ":" + addr.port);
});
