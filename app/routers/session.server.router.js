var express=require('express');
var router=express.Router();

router.post('/session',function(req,res,next){
	//登录请求
	res.end('post /session');
});

router.put('/session',function(req,res,next){
	res.end('put /session');
});

router.delete('/session',function(req,res,next){
	res.end('delete /session');
});

module.exports=router;