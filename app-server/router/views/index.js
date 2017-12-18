let express = require('express');
let path = require('path')
let appConf = require('../../config/app.js')

let router = express.Router();

let resolve = (dir) => {
	return path.join(appConf.root, dir)
}

// 首页
router.get('/', (req, res, next) => {
	res.render('home/index')
})
router.get('/index', (req, res, next) => {
	res.render('home/index')
})

exports = module.exports = router