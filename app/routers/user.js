var express=require('express');
var router=express.Router();

//注册账号
router.post('/user',function(req,res,next){
	res.end('post /user ');
});

//获得账号信息
router.get('/user',function(req,res,next){
	res.end('get /user ');
});

//更新账号信息
router.put('/user',function(req,res,next){
	res.end('put /user');
});

module.exports=router;