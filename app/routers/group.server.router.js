var express=require('express');
var router=express.Router();

router.get('/groups',function(req,res,next){
	res.end('get /groups');
});

router.post('/group',function(req,res,next){
	res.end('post /group');
});
router.put('/session',function(req,res,next){
	res.end('put /group');
});

router.get('/group',function(req,res,next){
	res.end('get /group');
});

router.delete('/group',function(req,res,next){
	res.end('delete /group');
});

module.exports=router;