'use strict'
var path=require('path');
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
	findOneByEmail:function(req,res,next,cb){
		console.log("this is accountController findOneByEmail.........");
		//根据邮箱和密码查找账号
		Account.findOne(
			{
				a_email:req.body.email,
				a_password:req.body.password
			},
			function(err,doc){
				//1，查找出错
				if(err)
				{
					console.log("accounts.findOneByEmail failed ......");
					return cb(err,null);
				}
				else
				{
					//2，查找没出错，但是结果为null
					//3，找到记录
					if(doc==null)
					{
						console.log("accounts.findOneByEmail result is null ......");
						return cb(new Error("result is null"),null);
					}
					else
					{
						console.log("accounts.findOneByEmail result is ",doc);
						return cb(err,doc);
					}
				}
			});
	}
};
