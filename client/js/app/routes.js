module.exports = function (app) {
    
    var fs = require('fs');
    var https = require("https");
    var mongo = require('./mongoose');
    
    app.get('/', function (req, res) {
	    res.render('index', {
    	    title : 'SDI - Sport Development Intelligence',
    	    widgets: 1
    	});
	});
	
	app.get('/gestion', function (req, res) {
	    res.render('index', {
    	    title : 'SDI - Sport Development Intelligence',
    	    widgetsProcesses: 1
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
		var filter = "{\"" + "idNeighborhood" + "\": " + req.params.idNeighborhood + "}";
		mongo.findRecords(filter, function(infras) {
    		res.render('index', {
				grid: 1,
	    	    title : 'SDI - Sport Development Intelligence',
	    	    neighborhoodId: req.params.idNeighborhood,
	    	    neighborhoodData: infras
	    	});
	    });
	});
	
	app.get('/neighborhood/(:idNeighborhood)?/graph/types', function (req, res) {
		var filter = "{}";
		
		if(req.params.idNeighborhood)
			filter = "{\"" + "idNeighborhood" + "\": " + req.params.idNeighborhood + "}";
			
		mongo.aggregateRecords(filter, function(infras) {
			//console.log(JSON.stringify(infras));
			var countInfras = 0;
			for(var i = 0; i < infras.length; i++) {
		        countInfras += infras[i].total;
		    }
		    res.render('index', {
				infraGraph: 1,
				type: 'types',
	    	    title : 'SDI - Sport Development Intelligence',
	    	    neighborhoodId: req.params.idNeighborhood,
	    	    countInfras: countInfras,
	    	    infras: infras
	    	});
    	});
	});
	
	app.get('/neighborhood/(:idNeighborhood)?/graph/inv', function (req, res) {
		var filter = "{}";
		
		if(req.params.idNeighborhood)
			filter = "{\"" + "idNeighborhood" + "\": " + req.params.idNeighborhood + "}";
			
		mongo.findRecords(filter, function(infras) {
			res.render('index', {
				infraGraph: 1,
				type: 'inv',
	    	    title : 'SDI - Sport Development Intelligence',
	    	    neighborhoodId: req.params.idNeighborhood,
	    	    infras: infras
	    	});
		});
	});
	
	app.get('/neighborhood/(:idNeighborhood)?/graph/end', function (req, res) {
		var filter = "{}";
		
		if(req.params.idNeighborhood)
			filter = "{\"" + "idNeighborhood" + "\": " + req.params.idNeighborhood + "}";
			
		var presComercial = 0;
		var gasComercial = 0;
		var presMarketing = 0;
		var gasMarketing = 0;
		var presMantenimiento = 0;
		var gasMantenimiento = 0;
		var presAtencionCliente = 0;
		var gasAtencionCliente = 0;
		var presCapacitacion = 0;
		var gasCapacitacion = 0;
		var presAdministracion = 0;
		var gasAdministracion = 0;
		
		mongo.findRecords(filter, function(infras) {
			for(var i = 0; i < infras.length; i++) {
				for(var j = 0; j < infras[i].infra.rows.length; j++) {
					presComercial += infras[i].infra.rows[j].financial.presupuesto[0].comercial;
					gasComercial += infras[i].infra.rows[j].financial.gasto[0].comercial;
					presMarketing += infras[i].infra.rows[j].financial.presupuesto[1].marketing;
					gasMarketing += infras[i].infra.rows[j].financial.gasto[1].marketing;
					presMantenimiento += infras[i].infra.rows[j].financial.presupuesto[2].mantenimiento;
					gasMantenimiento += infras[i].infra.rows[j].financial.gasto[2].mantenimiento;
					presAtencionCliente += infras[i].infra.rows[j].financial.presupuesto[3].atencioncliente;
					gasAtencionCliente += infras[i].infra.rows[j].financial.gasto[3].atencioncliente;
					presCapacitacion += infras[i].infra.rows[j].financial.presupuesto[4].capacitacion;
					gasCapacitacion += infras[i].infra.rows[j].financial.gasto[4].capacitacion;
					presAdministracion += infras[i].infra.rows[j].financial.presupuesto[5].administracion;
					gasAdministracion += infras[i].infra.rows[j].financial.gasto[5].administracion;
				}
		    }
		    res.render('index', {
				infraGraph: 1,
				type: 'end',
	    	    title : 'SDI - Sport Development Intelligence',
	    	    neighborhoodId: req.params.idNeighborhood,
	    	    presComercial: presComercial,
				gasComercial: gasComercial,
				presMarketing: presMarketing,
				gasMarketing: gasMarketing,
				presMantenimiento: presMantenimiento,
				gasMantenimiento: gasMantenimiento,
				presAtencionCliente: presAtencionCliente,
				gasAtencionCliente: gasAtencionCliente,
				presCapacitacion: presCapacitacion,
				gasCapacitacion: gasCapacitacion,
				presAdministracion: presAdministracion,
				gasAdministracion: gasAdministracion
	    	});
		});
	});
	
	app.get('/neighborhood/(:idNeighborhood)?/graph/uso', function (req, res) {
		var filter = "{}";
		
		if(req.params.idNeighborhood)
			filter = "{\"" + "idNeighborhood" + "\": " + req.params.idNeighborhood + "}";
			
		mongo.findRecords(filter, function(infras) {
			res.render('index', {
				infraGraph: 1,
				type: 'uso',
	    	    title : 'SDI - Sport Development Intelligence',
	    	    neighborhoodId: req.params.idNeighborhood,
	    	    infras: infras
	    	});
		});
	});
	
	app.get('/neighborhood/(:idNeighborhood)?/graph/calidad', function (req, res) {
		var filter = "{}";
		
		if(req.params.idNeighborhood)
			filter = "{\"" + "idNeighborhood" + "\": " + req.params.idNeighborhood + "}";
			
		mongo.findRecords(filter, function(infras) {
			res.render('index', {
				infraGraph: 1,
				type: 'calidad',
	    	    title : 'SDI - Sport Development Intelligence',
	    	    neighborhoodId: req.params.idNeighborhood,
	    	    infras: infras
	    	});
		});
	});
	
	app.get('/neighborhood/(:idNeighborhood)?/graph/acceso', function (req, res) {
		var filter = "{}";
		
		if(req.params.idNeighborhood)
			filter = "{\"" + "idNeighborhood" + "\": " + req.params.idNeighborhood + "}";
			
		mongo.findRecords(filter, function(infras) {
			res.render('index', {
				infraGraph: 1,
				type: 'acceso',
	    	    title : 'SDI - Sport Development Intelligence',
	    	    neighborhoodId: req.params.idNeighborhood,
	    	    infras: infras
	    	});
		});
	});
	
	app.get('/infra', function (req, res) {
		mongo.findAllRecords(function(infras) {
    		//console.log(JSON.stringify(infras));
			res.render('index', {
				grid: 1,
	    	    title : 'SDI - Sport Development Intelligence',
	    	    neighborhoodData: infras
	    	});
	    });
	});
	
	app.get('/filter', function (req, res) {
		res.render('index', {
    	    title : 'SDI - Sport Development Intelligence',
    	    map: 1
    	});
	});
	
	app.get('/calendar', function (req, res) {
		res.render('index', {
    	    title : 'SDI - Sport Development Intelligence',
    	    calendar: 1
    	});
	});
	
	app.get('/reserva', function (req, res) {
		var response = res;
		https.get('https://trial.bizagi.com/david.espinal/sdrc/webservices/workflowenginesoa.asmx/createCasesAsString?casesInfo=<BizAgiWSParam><domain>sdrc</domain><userName>Asesor</userName><Cases><Case><Process>Reservas</Process><Entities><Reservas><Escenario>Pascual Guerrero</Escenario><ValorEscenario>35000000</ValorEscenario><NumerodeDocumento>78665431</NumerodeDocumento><Nombre>Juan</Nombre><Correo>Juan@sdi.com</Correo><Telefono>3115672266</Telefono><FechaInicio>2018/10/12</FechaInicio><FechaFin>2018/10/13</FechaFin></Reservas></Entities></Case></Cases></BizAgiWSParam>', (res) => {
			console.log('statusCode:', res.statusCode);
			console.log('headers:', res.headers);
		
			response.render('index', {
				title : 'SDI - Sport Development Intelligence',
				widgets: 1
			});
		}).on('error', (e) => {
		  console.error('Error:' + e);
		});
	});
	
	app.get('/events', function (req, res) {
		//
	});
	
	app.get('/tramitar', function (req, res) {
		var response = res;
		https.get('https://trial.bizagi.com/david.espinal/sdrc/webservices/workflowenginesoa.asmx/createCasesAsString?casesInfo=<BizAgiWSParam><domain>domain</domain><userName>admon</userName><Cases><Case><Process>Tramites</Process><Entities><Tramites><Tramite>Certificado de Existencia y Representación Legal</Tramite></Tramites></Entities></Case></Cases></BizAgiWSParam>', (res) => {
			console.log('statusCode:', res.statusCode);
			console.log('headers:', res.headers);
		
			response.render('index', {
				title : 'SDI - Sport Development Intelligence',
				widgets: 1
			});
		}).on('error', (e) => {
		  console.error('Error:' + e);
		});
	});
	
	app.get('/iniciarTramite', function (req, res) {
		var response = res;
		https.get('https://trial.bizagi.com/david.espinal/sdrc/webservices/workflowenginesoa.asmx/createCasesAsString?casesInfo=<BizAgiWSParam><domain>sdrc</domain><userName>Asesor</userName><Cases><Case><Process>Reservas</Process><Entities><Reservas><Escenario>Pascual Guerrero</Escenario><ValorEscenario>35000000</ValorEscenario><NumerodeDocumento>78665431</NumerodeDocumento><Nombre>Juan</Nombre><Correo>Juan@sdi.com</Correo><Telefono>3115672266</Telefono><FechaInicio>2018/10/12</FechaInicio><FechaFin>2018/10/13</FechaFin></Reservas></Entities></Case></Cases></BizAgiWSParam>', (res) => {
			console.log('statusCode:', res.statusCode);
			console.log('headers:', res.headers);
		
			response.render('index', {
				title : 'SDI - Sport Development Intelligence',
				widgets: 1
			});
		}).on('error', (e) => {
		  console.error('Error:' + e);
		});
	});
	
	app.get('/organizations', function (req, res) {
		/*res.render('index', {
    	    title : 'SDI - Sport Development Intelligence',
    	    organizations: 1
    	});*/
	});
	
	app.get('/access', function (req, res) {
		//
	});
	
	app.get('/processes', function (req, res) {
		//
	});
	
	app.get('/procedures', function (req, res) {
		res.render('index', {
    	    title : 'SDI - Sport Development Intelligence',
    	    organizations: 1
    	});
	});
	
};