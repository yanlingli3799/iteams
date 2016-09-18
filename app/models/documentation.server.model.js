var mongoose = require('mongoose');

Schema = mongoose.Schema;

var DocumentationSchema = new Schema({
	d_version:{type:String},
	d_name:{type:String},
	d_describe:{type:String},
	d_logs:[{
		time:{type:Date,default:Date.now},
		ref_tid:{type:Schema.Types.ObjectId},
		operation:{type:String}
	}]
});

var Documentation = mongoose.model('Documentation', DocumentationSchema);