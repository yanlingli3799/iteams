var express=require('express');
var router=express.Router();
var path=require('path');
var p_root=process.cwd();

//注册账号
router.post('/account',function(req,res,next){
	console.log("注册账号......");
	//返回一个json，正确或错误。


/*
	accountController.create(req,res,next,function(err,result){
		if(err){
			console.log('create account err......');
		}else{
			console.log('create account success......result is ',result.toString());
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