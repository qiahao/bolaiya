let express = require('express') 
let ejs = require('ejs') 
let path = require('path') 

let appConf = require('./config/app.js')
let routerApi = require('./router/api/index.js')
let routerViews = require('./router/views/index.js')

let resolve = function (dir) {
	return path.join(__dirname, dir)
}

let app = express()
// 模版引擎、静态文件设置
app.engine('html', ejs.__express)
app.set('view engine', 'html')
app.set('views', [resolve('views')])
app.use('/static',express.static('web/static'))

/**
 * router
 */

app.use('/api',routerApi)

app.use(routerViews)



let server = app.listen(appConf.port, () => {
	console.log('app run at: ', appConf.port)
})