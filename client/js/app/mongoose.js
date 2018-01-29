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
            value: String
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
