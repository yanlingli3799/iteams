var mongoose=require('mongoose');
var Users=mongoose.model('Users');

module.exports={
	//创建新用户
	create:function(req,res,next,cb){

	    var user = new Users({
	    	u_email:'110@qq.com',
	    	u_password:'pswd',
	    	u_name:'name',
	    	u_skills:['sk1','sk2','sk3'],
	    	u_phone:'15555555555',
	    	u_projects:[]
	    });

	    user.save(function(err){
	      if(err){
	      	console.log('create:save user error');
	      	return cb(err,null);
	      }
	      else
	      {
	      	console.log('create:save user success');
	      	return cb(err,user.toString());
	      }
	    });

	},

	list:function(req,res,next){},
	getById:function(req,res,mext){}
};
