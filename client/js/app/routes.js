module.exports = function (app) {
    
    var fs = require('fs');
    
    function graph() {
	    fs.readFile(__dirname + '/../../html/investments.html', 'utf8', function(err, text) {
	        console.log('DavidE Text: ' + text);
	        return text;
        });
    }

	app.get('/', function (req, res) {
	    fs.readFile(__dirname + '/../../html/investments.html', 'utf8', function(err, text) {
	        console.log('DavidE Text 1: ' + text);
	        res.render('index', {
        	    title : 'SDI - Sport Development Intelligence',
        		graph: 'mapContainer'
        	});
        });
	});
	
	app.get('/resources', function (req, res) {
		res.render('index', {
			title : 'SDI - Sport Development Intelligence',
			graph: 'bubbleContainer'
		});
	});
	
};