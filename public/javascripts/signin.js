var app=angular.module('ng_signin',[]);


app.controller('ng_signin_ctrl',function($scope){

	var msg_incorrect = "Incorrect Email or Password";
	var msg_error = "Unknown Error";
	var url_redirect = "home";

	$scope.signin_email = "";
	$scope.signin_password = "";
	$scope.signin_rememberme = false;
	$scope.signin_warning_hide = true;
	$scope.singin_warning_msg = msg_incorrect;

	//POST /session
	$scope.submitSignin = function()
	{
		var signin_email = $scope.signin_email;
		var signin_password = $scope.signin_password;
		var signin_rememberme = $scope.signin_rememberme;

		$.ajax({
			type:'POST',
			url:'session',
			async:false,
			data:{
				signin_email:signin_email,
				signin_password:signin_password,
				signin_rememberme:signin_rememberme
			},
			success:function(data,textStatus)
			{
				if(data.status == true)
				{
					$scope.signin_warning_hide = true;
					location.href = url_redirect;
				}
				else
				{
					$scope.singin_warning_msg = msg_incorrect;
					$scope.signin_warning_hide = false;
				}
			},
			error:function(XMLHttpRequest, textStatus, errorThrown)
			{
				$scope.singin_warning_msg = msg_error;
				$scope.signin_warning_hide = false;
			}
		});
	}
});

