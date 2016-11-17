var async = require ('async');

var createUser = function (id, callback){
		callback(null, {
			id: 'user' + id
		});
};

async.times(5,function (n, next) {
	createUser(n, function(err,user){
	next (err,user);
	console.log(user.id);
	});
}, function(err,user){}
);