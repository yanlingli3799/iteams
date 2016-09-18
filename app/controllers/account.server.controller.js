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

	list:function(req,res,next){},
	getById:function(req,res,mext){}
};
