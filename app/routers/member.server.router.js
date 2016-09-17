var express=require('express');
var router=express.Router();

router.get('/members',function(req,res,next){
	res.end('get /members');
});

router.post('/member',function(req,res,next){
	res.end('post /member');
});

router.put('/member',function(req,res,next){
	res.end('put /member');
});

router.delete('/member',function(req,res,next){
	res.end('delete /member');
});

module.exports=router;