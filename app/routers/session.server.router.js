var express=require('express');
var router=express.Router();
var path=require('path');
var p_root=process.cwd();


var accountController=require(path.join(p_root,'app/controllers/account.server.controller.js'));

//用户登录
router.post('/session',function(req,res,next){
	//登录请求
	//调用userController的create方法，并设置一个回调函数
	console.log("用户登录，这里是post session............");
	console.log("用户输入的信息：",JSON.stringify(req.body, null, 2));

	console.log("email：",req.body.email);
	console.log("password：",req.body.password);

	//检查登录信息是否合法，去数据库里查，是否有这个用户
	console.log("接下来要检查登录信息是否合法........");
	accountController.findOneByEmail(req,res,next,function(err,result){
		
		if(err)
		{
			console.log("查找出错或没有找到相关记录...");
			res.send("not found");
		}
		else
		{
			console.log("查找成功...");
			//配置session和cookie......
			//重定向到主页
			res.redirect('/home');
		}
	});


//	res.end('post /session');
});

router.put('/session',function(req,res,next){
	res.end('put /session');
});

router.delete('/session',function(req,res,next){
	res.end('delete /session');
});

module.exports=router;