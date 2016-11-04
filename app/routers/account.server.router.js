var express=require('express');
var router=express.Router();
var path=require('path');
var p_root=process.cwd();
var tools = require(path.join(p_root,'config/tools.js'));

//注册账号
router.post('/account',function(req,res,next){
	tools.log(5,"注册账号......");
	//返回一个json，正确或错误。


/*
	accountController.create(req,res,next,function(err,result){
		if(err){
			tools.log(5,'create account err......');
		}else{
			tools.log(5,'create account success......result is ',result.toString());
		}
	});
*/
//	res.end('post /account ');
});

//获得账号信息
router.get('/account',function(req,res,next){
	res.end('get /account ');
});

//更新账号信息
router.put('/account',function(req,res,next){
	res.end('put /account');
});

module.exports=router;