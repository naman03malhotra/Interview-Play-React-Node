var mongoose = require('mongoose');


var userSchema = mongoose.Schema({
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

var Users = module.exports = mongoose.model('Users',userSchema);

