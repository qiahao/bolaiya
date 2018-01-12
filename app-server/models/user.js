var util = require('./util.js')

var User = function () {}

User.prototype.getUserByTel = function (tel,callback) {
	var sql = 'select * from user where tel =?';
	var sqlValue = tel
	util(sql,sqlValue, callback)
}

module.exports = User