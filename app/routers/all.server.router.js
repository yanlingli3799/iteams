var express=require('express');
var path=require('path');
var p_root=process.cwd();

var router=express.Router();
var tools=require(path.join(p_root,'config/tools.js'));
var CFG=require(path.join(p_root,'config/config.js'));

/*
对所有请求检查：是否带cookie?
	1.带cookie，检查cookie有效？
		1.1 有效 => next()交给后面的路由处理
		1.2 无效 => redirect to signin
	2.不带cookie
		=>redirect to signin
*/

router.all('/*',function(req,res,next){

	tools.log(5,'这里是all，可以处理所有的请求......');
//	tools.log(5,'someone connect to me.........');
//	tools.log(5,'请求数据body：',JSON.stringify(req.body, null, 2));
	tools.log(5,'请求数据params：',req.path);


//手动清除cookie，但是要重启浏览器才能生效，并不是立即生效。
//	res.cookie('user_email','1101076815@qq.com',{expires:0});


	switch(req.path)
	{
		//请求登录页面
		case CFG.REQ_PATH_SIGNIN:{
			tools.isCookieValid(req.cookies,function(status){
				if(status==true)
				{
					console.log("登录请求 -- cookie有效，重定向到主页...");
					redirect(CFG.REQ_PATH_HOME);
				}
				else
				{
					console.log("登录请求 -- cookie无效，next到登录页面");
					next();
				}
			});

			break;
		}
		//提交登录信息
		case CFG.REQ_PATH_SESSION:{
			console.log("-- SESSION登录 --");
			next();
			break;
		}
		//请求FAVICON资源
		case CFG.REQ_PATH_FAVICON:{
			console.log("-- FAVICON资源 --");
			next();
			break;
		}
		//其他请求
		default:{
			tools.isCookieValid(req.cookies,function(status){
				if(status==true)
				{
					console.log("页面请求 -- cookie有效，交给next处理...");
					next();
				}
				else
				{
					console.log("页面请求 -- cookie无效，转到signin页面");
					res.redirect(CFG.REQ_PATH_SIGNIN);
				}
			});
		}
	}

});

module.exports=router;
