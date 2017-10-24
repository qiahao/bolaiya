let env = process.env.NODE_ENV

let baseConfig = {}


let configEnv = {
	development: {
		host: 'http://localhost'
	},
	production: {
		host: '/'
	}
}





let config = Object.assign({},baseConfig,configEnv[env])

export default config