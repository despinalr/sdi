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
	
};