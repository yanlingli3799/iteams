var mongoose = require('mongoose');

Schema = mongoose.Schema;

var NotificationSchema = new Schema({
	n_time:{
		type:Date,
		default:Date.now
	},
	n_type:{type:String},
	n_content:{type:String},
	n_receivers:{
		rec_id:{type:Schema.Types.ObjectId},
		rec_wread:{type:Boolean}
	}
});

var Notification = mongoose.model('Notification', NotificationSchema);