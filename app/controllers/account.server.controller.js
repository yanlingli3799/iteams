'use strict'
var path=require('path');
var p_root=process.cwd();
var mongoose=require('mongoose');
var Account=mongoose.model('Account');


module.exports={
	//创建新账号
	create:function(req,res,next,cb){

	    var account = new Account({
	    	a_email:'eeee@qq.com',
	    	a_password:'pswd',
	    	a_name:'eeee',
	    	a_skills:['sk1','sk2','sk3'],
	    	a_phone:'15555555555',
	    	a_projects:[]
	    });
	    
	    account.save(function(err){
	      if(err){
	      	console.log('create:save account error');
	      	return cb(err,null);
	      }
	      else
	      {
	      	console.log('create:save account success');
	      	return cb(err,account.toString());
	      }
	    });
	},

	list:function(req,res,next,cb){},


/*
input:
	obj.email
	obj.password

output:
	cb(err,doc).

steps:
	1.查找出错，cb(err,null).
	2.没出错，但结果为null，则cb(new Error(),null).
	3.没出错，且结果不为bull，则cb(err,doc).
*/
	
	findOneByEmail:function(obj,next,cb){
		//根据邮箱和密码查找账号
		Account.findOne(
			{
				a_email:obj.email,
				a_password:obj.password
			},
			function(err,doc){
				if(err)
				{
					return cb(err,null);
				}
				else
				{
					if(doc==null)
					{
						return cb(new Error("result is null"),null);
					}
					else
					{
						return cb(err,doc);
					}
				}
			});
	}
};
