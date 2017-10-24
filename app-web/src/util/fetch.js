import axios from 'axios'
import { Message } from 'iview'
import routes from '@/routes'
import config from '@/config/index'


// 全局默认配置
axios.defaults.baseURL = config.host;
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [function (data) {
    let str = []
    for (let p in data) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));    
    }    
    return str.join("&");
}]

// 开发环境打印信息
function log(msg) {
    if (_env === 'development') {
        console.log(msg)
    }
}

export default (options) => {
    return new Promise((resolve, reject) => {
        // let _user = localStorageMng.getUserInfo() || {}
        let _params = {},
            _conf = null;


        if (!options) return Message.error('缺少请求必要参数')
        // if (!_user.user_id && options.url != '/api/users/login') {
        //     return store.dispatch('logout')
        // }

        // method
        if (!options.method || options.method == 'get') {
            if (options.params) {
                options.params = Object.assign(_params, options.params)
            }else{
                options.params = {..._params}
            }
        }else if (options.method == 'post' || options.method == 'put' || options.method == 'patch') {
            if (options.data) {
                options.data = Object.assign(_params, options.data)
            }else{
                options.data = {..._params}
            }
        }

        _conf = Object.freeze(options)

        axios(_conf)
            .then(rsp => {

                if (rsp.data.code == 1) {
                    resolve(rsp.data)
                } else if (rsp.data.code == 2) {
                    // 登录错误等信息处理
                    switch (rsp.data.bizcode) {
                        case 'USER_NOT_LOGIN':
                        case 'USER_NOT_EXSIST':
                        case 'USER_LOGIN_BY_OTHER':
                            logout()
                            break;
                    }
                    Message.error(rsp.data.resultInfo)
                    reject(rsp.data)
                }
            })
            .catch((err) => {
                Message.error('当前网络异常，请稍后再试！')
                reject(err)
            })
    })
}