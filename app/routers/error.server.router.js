
module.exports=function(req,res,next){
    var err = new Error('Not Found');
    err.status = 404;
    next(err);

	res.status(err.status);
	
    res.render('error', {
      message: 'err.message',
      error: {
      	status:'404',
      	stack:'.........'
      }
    });

};
