var mysql = require('mysql')
var db = require('./db.js')
var expressDataBase = mysql.createPool(db.expressTest)
module.exports = expressDataBase