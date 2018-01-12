var mysql = require('../config/mysql.js')

var mysqlUtil = function (sql,sqlVal,callback) {
	mysql.getConnection((err,connection)=>{
		if (err) {
			callback(true)
			return
		}
		connection.query(sql, sqlVal,function(err, results) {
	        if (err) {
	            callback(true);
	            return;
	        }
	        callback(false, results);
	    });
	})
}

module.exports = mysqlUtil