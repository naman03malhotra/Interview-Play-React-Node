var mongoose = require('mongoose');


var interviewSchema = mongoose.Schema({
	user_id:{
		type:String,
		required: true
	},
	int_id:{
		type:String,
		required:true
	},
	timeOfInterview:{
		type:String,
		required:true
	},
	timestamp:{
		type: Date,
		default: Date.Now
	}

	
});

var upcominginterviews = module.exports = mongoose.model('upcominginterviews',interviewSchema);