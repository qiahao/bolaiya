let path = require('path')

let dev = process.argv[2] == 'dev'

let config = {
	build: {
		port: '80',
		root: path.join(__dirname, '..')
	},
	dev: {
		port: '8088',
		root: path.join(__dirname, '..')
	}
}

config = dev ? config.dev : config.build
exports = module.exports = config