var express=require('express');
var router=express.Router();
var path=require('path');
var p_root=process.cwd();

var accountController=require(path.join(p_root,'app/controllers/account.server.controller.js'));

router.post('/session',function(req,res,next){
	//登录请求
	//调用userController的create方法，并设置一个回调函数
	accountController.create(req,res,next,function(err,result){
		if(err){
			console.log('create account err......');
		}else{
			console.log('create account success......result is ',result.toString());
		}
	});

	res.end('post /session');
});

router.put('/session',function(req,res,next){
	res.end('put /session');
});

router.delete('/session',function(req,res,next){
	res.end('delete /session');
});

module.exports=router;