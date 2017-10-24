import { webpackRequire2array } from '@/util/util.js'
let routes = webpackRequire2array(require.context('./modules', true, /^\.\/[\s\S]+\/*\.js$/), [])


export default [{
	path: '/',
	redirect: '/home'
  },
  ...routes
]
