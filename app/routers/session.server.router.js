var express=require('express');
var router=express.Router();
var path=require('path');
var p_root=process.cwd();
var accountController=require(path.join(p_root,'app/controllers/account.server.controller.js'));


var CFG=require(path.join(p_root,'config/config.js'));



/*
登录请求，POST /session

输入：
req.signin_email			=>  obj_in.email
req.body.signin_password	=>	obj_in.password
req.body.signin_rememberme	=>	obj_in.rememberme

输出：
obj_out.status

*/
router.post('/session',function(req,res,next){

	console.log("用户登录，这里是post session............");
	console.log("用户输入的信息：",JSON.stringify(req.body, null, 2));

	var obj_in=new Object;
	obj_in.email=req.body.signin_email;
	obj_in.password=req.body.signin_password;
	obj_in.rememberme=req.body.signin_rememberme;


	//检查登录信息是否合法，去数据库里查，是否有这个用户
	console.log("接下来要检查登录信息是否合法........");
	accountController.findOneByEmail(obj_in,next,function(err,result){
		var obj_out=new Object;
		if(err)
		{
			console.log("查找出错或没有找到相关记录...");
			obj_out.status=false;
		}
		else
		{
			console.log("查找成功...");
			//配置session和cookie......
			if("true" == obj_in.rememberme)
			{
				res.cookie('passport',obj_in.email,{expires:new Date(Date.now()+CFG.COOKIE_EXPIRES)});
			}
			else
			{
				res.cookie('passport',obj_in.email,{expires:CFG.COOKIE_DELETE});
			}

			obj_out.status=true;
		}
		res.send(obj_out);
	});

});// end of : router.post.session

router.put('/session',function(req,res,next){
	res.end('put /session');
});

router.delete('/session',function(req,res,next){
	res.end('delete /session');
});

module.exports=router;