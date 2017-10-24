let express = require('express');
let path = require('path')
let appConf = require('../../config/app.js')

let router = express.Router();

let resolve = (dir) => {
	return path.join(appConf.root, dir)
}



router.get('/', (req, res, next) => {
	res.sendFile(resolve('web/dist/index.html'))
})

router.get('/index', (req, res, next) => {
	res.sendFile(resolve('web/dist/index.html'))
})

exports = module.exports = router