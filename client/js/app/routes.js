module.exports = function (app) {
    
    var fs = require('fs');
    
    app.get('/', function (req, res) {
	    fs.readFile(__dirname + '/../../html/investments.html', 'utf8', function(err, text) {
	        res.render('index', {
        	    title : 'SDI - Sport Development Intelligence',
        		graph: text
        	});
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
    	    departmentId: req.params.idDepartment,
    	    graph: '<div id="mapContainer"></div>'
    	});
	});
	
	app.get('/commune/:idCommune', function (req, res) {
		fs.readFile(__dirname + '/../../html/communes/' + req.params.idCommune + '.html', 'utf8', function(err, text) {
			res.render('index', {
	    	    title : 'SDI - Sport Development Intelligence',
	    	    communeId: req.params.idCommune,
	    	    neighborhood: text,
	    	    graph: '<div id="mapContainer"></div>'
	    	});
        });
	});
	
	app.get('/neighborhood/:idNeighborhood', function (req, res) {
		res.render('index', {
    	    title : 'SDI - Sport Development Intelligence',
    	    neighborhoodId: req.params.idNeighborhood
    	});
	});
	
};