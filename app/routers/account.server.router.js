var express=require('express');
var router=express.Router();

//注册账号
router.post('/account',function(req,res,next){
	res.end('post /account ');
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