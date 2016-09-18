var mongoose = require('mongoose');

Schema = mongoose.Schema;

var AccountSchema = new Schema({
  a_email:{
  	type:String,
  	required:true,
  	unique:true
  	//邮箱格式要求
  },
  a_password:{
  	type:String,
  	required:true
  	//密码要求
  },
  a_name: {
  	type:String,
  	required:true,
  	unique:true
  	//姓名要求
  },
  a_phone:{
  	type:String,
  	//电话号码格式要求
  },
  a_signtime:{
  	type: Date,
  	default: Date.now
  },
  a_skills:[{
    type:String
  }]/*,
  a_projects:[{
    type:Schema.Types.ObjectId,
    ref:'Projects'
    //项目列表
  }]*/
});


var User=mongoose.model('Account', AccountSchema);
