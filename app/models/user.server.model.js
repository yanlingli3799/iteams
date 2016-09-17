var mongoose = require('mongoose');

Schema = mongoose.Schema;

var UserSchema = new Schema({
  u_email:{
  	type:String,
  	required:true,
  	unique:true
  	//邮箱格式要求
  },
  u_password:{
  	type:String,
  	required:true
  	//密码要求
  },
  u_name: {
  	type:String,
  	required:true,
  	unique:true
  	//姓名要求
  },
  u_phone:{
  	type:String,
  	//电话号码格式要求
  },
  u_signtime:{
  	type: Date,
  	default: Date.now
  },
  u_skills:[{
    type:String
  }],
  u_projects:[{
    type:Schema.Types.ObjectId,
    ref:'Projects'
    //项目列表
  }]
});

var News = mongoose.model('User', UserSchema);