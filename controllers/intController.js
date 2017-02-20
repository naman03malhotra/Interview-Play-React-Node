var Int = require('../models/interviewers');


module.exports = {
	find: function(params, callback){
		Int.find(params,function(err, Ints){
			if(err){
				callback(err,  null);
				return; 
			}
			callback(null, Ints);
		});

	},
	findById: function(id, callback){
		Int.findById(id, function(err, Int){
			if(err){
				callback(err,  null);
				return; 
			}
			callback(null, Int);
		});
	},
	create: function(params, callback){
		Int.create(params, function(err, Int){
			if(err){
				callback(err, null);
				return;
			}
			callback(null, Int);
		});

	},
	update: function(id, params, callback){
		Int.findIdAndUpdate(id, params, {new:true}, function(err, Int){
			if(err){
				callback(err, null);
				return;
			}
			callback(null, Int);
		});

	},
	delete: function(id, callback){
		Int.findIdAndRemove(id, function(err){
			if(err){
				callback(err,null)
				return;
			}
			callback(null,null);
		});

	}
}