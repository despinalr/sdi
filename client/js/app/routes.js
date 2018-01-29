module.exports = function (app) {
    
    var fs = require('fs');
    var mongo = require('./mongoose');
    
    app.get('/', function (req, res) {
	    res.render('index', {
    	    title : 'SDI - Sport Development Intelligence',
    	    widgets: 1
    	});
	});
	
	app.get('/resources', function (req, res) {
	    fs.readFile(__dirname + '/../../html/resources.html', 'utf8', function(err, text) {
	        res.render('index', {
        	    title : 'SDI - Sport Development Intelligence',
        		graph: text
        	});
        });
	});
	
	app.get('/who', function (req, res) {
	    fs.readFile(__dirname + '/../../html/who.html', 'utf8', function(err, text) {
	        res.render('index', {
        	    title : 'SDI - Sport Development Intelligence',
        		graph: text
        	});
        });
	});
	
	app.get('/mision', function (req, res) {
	    fs.readFile(__dirname + '/../../html/mision.html', 'utf8', function(err, text) {
	        res.render('index', {
        	    title : 'SDI - Sport Development Intelligence',
        		graph: text
        	});
        });
	});
	
	app.get('/values', function (req, res) {
	    fs.readFile(__dirname + '/../../html/values.html', 'utf8', function(err, text) {
	        res.render('index', {
        	    title : 'SDI - Sport Development Intelligence',
        		graph: text
        	});
        });
	});
	
	app.get('/intro', function (req, res) {
	    fs.readFile(__dirname + '/../../html/intro.html', 'utf8', function(err, text) {
	        res.render('index', {
        	    title : 'SDI - Sport Development Intelligence',
        		graph: text
        	});
        });
	});
	
	app.get('/services', function (req, res) {
	    fs.readFile(__dirname + '/../../html/services.html', 'utf8', function(err, text) {
	        res.render('index', {
        	    title : 'SDI - Sport Development Intelligence',
        		graph: text
        	});
        });
	});
	
	app.get('/solutions', function (req, res) {
	    fs.readFile(__dirname + '/../../html/solutions.html', 'utf8', function(err, text) {
	        res.render('index', {
        	    title : 'SDI - Sport Development Intelligence',
        		graph: text
        	});
        });
	});
	
	app.get('/department/:idDepartment', function (req, res) {
		res.render('index', {
    	    title : 'SDI - Sport Development Intelligence',
    	    departmentId: req.params.idDepartment
    	});
	});
	
	app.get('/commune/:idCommune', function (req, res) {
		fs.readFile(__dirname + '/../../html/communes/' + req.params.idCommune + '.html', 'utf8', function(err, text) {
			res.render('index', {
	    	    title : 'SDI - Sport Development Intelligence',
	    	    communeId: req.params.idCommune,
	    	    neighborhood: text
	    	});
        });
	});
	
	app.get('/neighborhood/:idNeighborhood', function (req, res) {
		mongo.findAllRecords(function(infras) {
			console.log(JSON.stringify(infras));
			res.render('index', {
	    	    title : 'SDI - Sport Development Intelligence',
	    	    neighborhoodId: req.params.idNeighborhood,
	    	    neighborhoodData: infras[0]
	    	});
	    });
	});
	
	app.get('/infra', function (req, res) {
		res.render('index', {
    	    title : 'SDI - Sport Development Intelligence',
    	    map: 1,
    	    neighborhooodId: req.params.idNeighborhood,
    	    neighborhoodData: 'Algo',
    	    assetText: 'Infraestructura'
    	});
	});
	
	app.get('/events', function (req, res) {
		//
	});
	
	app.get('/organizations', function (req, res) {
		//
	});
	
	app.get('/access', function (req, res) {
		//
	});
	
	app.get('/processes', function (req, res) {
		//
	});
	
	app.get('/procedures', function (req, res) {
		//
	});
	
};