var upcominginterviews = require('../models/upcominginterviews');


module.exports = {
	find: function(params, callback){
		upcominginterviews.find(params,function(err, upcominginterviews){
			if(err){
				callback(err,  null);
				return; 
			}
			callback(null, upcominginterviews);
		});

	},
	findById: function(id, callback){
		upcominginterviews.findById(id, function(err, upcominginterview){
			if(err){
				callback(err,  null);
				return; 
			}
			callback(null, upcominginterview);
		});
	},
	create: function(params, callback){
		upcominginterviews.create(params, function(err, upcominginterviews){
			if(err){
				callback(err, null);
				return;
			}
			callback(null, upcominginterviews);
		});

	},
	update: function(id, params, callback){
		upcominginterviews.findByIdAndUpdate(id, params, {new:true}, function(err, upcominginterview){
			if(err){
				callback(err, null);
				return;
			}
			callback(null, upcominginterview);
		});

	},
	delete: function(id, callback){
		upcominginterviews.findByIdAndRemove(id, function(err){
			if(err){
				callback(err,null)
				return;
			}
			callback(null,null);
		});

	}
}