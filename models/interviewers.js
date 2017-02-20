var mongoose = require('mongoose');


var interviewerSchema = mongoose.Schema({
	picture:{
		type:String,
		required: true
	},
	name:{
		first:{
			type:String,
			required:true
		},
		last:{
			type:String,
			required:false
		}
	},
	company:{
		type:String,
		required:false
	},
	email:{
		type:String,
		required:false
	},
	phone:{
		type:String,
		required:true
	}

	
});

var Interviewers = module.exports = mongoose.model('Interviewers',interviewerSchema);


// Get interviewers

module.exports.getInterviewers = function(callback,limit){
	Interviewers.find(callback).limit(limit);
}



