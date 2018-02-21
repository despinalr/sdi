var mongoose = require('mongoose');
mongoose.connect('mongodb://despinalr:lpdp451789@ds121896.mlab.com:21896/sdi');
//var objectId = mongoose.Schema.ObjectId;
var infraSchema = new mongoose.Schema({
    id: String,
    idNeighborhood: Number,
    infra: { 
        headers: [String],
        rows: [{
            name: String,
            value: String,
            typeInfra: String,
            active: Number,
            passive: Number,
            direccion: String,
            extension: Number,
            responsable: String,
            caracteristicas: String,
            calidad : {
                buena: Number,
                mala: Number,
                regular: Number
            },
            acceso: {
                deporte: {
                    nino: Number,
                    adultos: Number,
                    mayores: Number
                },
                recreacion: {
                    nino: Number,
                    adultos: Number,
                    mayores: Number
                },
                actividad: {
                    nino: Number,
                    adultos: Number,
                    mayores: Number
                }
            },
            financial: {
                presupuesto: [{
                    comercial: Number,
                    marketing: Number,
                    mantenimiento: Number,
                    atencioncliente: Number,
                    capacitacion: Number,
                    administracion: Number,
                }],
                gasto: [{
                    comercial: Number,
                    marketing: Number,
                    mantenimiento: Number,
                    atencioncliente: Number,
                    capacitacion: Number,
                    administracion: Number
                }]
            }
        }]
    }
    
});

var infra = mongoose.model('Infrastructure', infraSchema, 'Infrastructure');

mongoose.connection.on('open', function() {
    console.log('Connected to Database!!!');
});

exports.findAllRecords = function(callback) {
    infra.find({}, function(err, infras) {
        callback(infras);
    });
};

exports.findRecords = function(filter, callback) {
    infra.find(JSON.parse(filter), function(err, infras) {
        callback(infras);
    });
};

exports.aggregateRecords = function(filter, callback) {
    infra.aggregate([{
        $match: JSON.parse(filter)
    },
    {
        $unwind: "$infra.rows"
    },
    {
        $group: {
            _id: "$infra.rows.typeInfra",
            total: { $sum: 1 }
        }
    }], function (err, infras) {
        callback(infras);
    });
};
