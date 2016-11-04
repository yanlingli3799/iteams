var express=require('express');
var router=express.Router();


//更新账号信息
router.get('/favicon.ico',function(req,res,next){
	console.log("get favicon.ico");
	res.end('get favicon.ico');
});

module.exports=router;