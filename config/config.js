module.exports={
	PORT_APP:7001,
	PORT_REDIS:6379,
	DB_URI_MONGO:'mongodb://182.61.22.101/iteams',
	DB_URI_REDIS:'127.0.0.1',
	
	COOKIE_DELETE:0,//不记住密码、退出登录的超时时间设置
	COOKIE_EXPIRES:1000*60*60*24*7,//记住密码的cookie超时时间默认为一周

	LOG_LEVEL_THRESHOLD:1,//级别大于LEVEL的
	LOG_LEVEL_BOTTOM:1,//最低
	LOG_LEVEL_TOP:10,//最高

	REQ_PATH_SIGNIN:'/signin',
	REQ_PATH_SESSION:'/session',
	REQ_PATH_HOME:'/home',
	REQ_PATH_FAVICON:'/favicon.ico',

};