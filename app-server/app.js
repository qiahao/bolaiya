let express = require('express') 
let appConf = require('./config/app.js')
let routerApi = require('./router/api/index.js')
let routerViews = require('./router/views/index.js')




let app = express()

app.use('/static',express.static('web/dist/static/'))

/**
 * router
 */

app.use('/api',routerApi)

app.use(routerViews)



let server = app.listen(appConf.port, () => {
	console.log('app run at: ', appConf.port)
})