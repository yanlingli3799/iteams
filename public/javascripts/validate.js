/*
validate.js
检查前端页面输入是否合法
*/

//检查邮箱名
function isValidEmail(email)
{
}

//检查密码
function isValidPassword(password)
{
	var reg=/[\S]{6,20}/;
	return reg.test(password);
}

//检查两次输入的密码一致
function isValidRePassword(password1,password2)
{
	return password1==password2;
}



//检查注册信息是否完整
function isValidSignUp(obj)
{
}

//检查登录信息是否完整
function isValidSignIn(obj)
{
}