var mongoose = require('mongoose');

Schema = mongoose.Schema;

var TaskSchema = new Schema({
	t_title:{type:String},
	t_content:{type:String},
	t_file:[{
		name:{
			type:Schema.Types.ObjectId,
			ref:'Documentation'
		},
		operation:{type:String}
	}],
	t_status:{
		type:String,
		enum:['todo','doing','done']
	},
	t_pretask:{
		type:Schema.Types.ObjectId,
		ref:'Task'
	},
	t_duration:{
		start:{type:Date},
		stop:{type:Date}
	},
	t_delay:{
		state:{type:String},
		unit:{type:String}
	},
	t_important:{
		type:Number,
		min:1,
		max:5
	},
	t_load:{
		type:Number,
		min:1,
		max:10
	},
	t_submitter:{
		type:Schema.Types.ObjectId,
		ref:'Account'
	},
	t_responsible:{
		type:Schema.Types.ObjectId,
		ref:'Account'
	},
	t_collaborators:[{
		type:Schema.Types.ObjectId,
		ref:'Account'
	}],
	t_groupmsg:[{
		time:{type:Date},
		content:{type:String},
		who:{
			type:Schema.Types.ObjectId,
			ref:'Account'
		}
	}],
	t_log:[{type:String}]

});

var Task = mongoose.model('Task', TaskSchema);