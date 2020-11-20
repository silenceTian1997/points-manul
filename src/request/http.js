/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios';
import QS from 'qs';
import { Toast,Notify } from 'vant';
import store from '../store'
// import router from '../router'


axios.defaults.baseURL = store.state.webPath + '/';

// 请求超时时间
axios.defaults.timeout = 20000;
axios.defaults.withCredentials=true
axios.defaults.crossDomain=true
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.post['auth'] = store.state.token;
// get请求头
axios.defaults.headers.get['token'] = store.state.token;

// 请求拦截器
axios.interceptors.request.use(
    config => {
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        const token = store.state.token;
        token && (config.headers.token = token);
        return config;
    },
    error => {
        return Promise.error(error);
    }
)

// 响应拦截器
axios.interceptors.response.use(
    response => {
        console.warn(response)
        if (response !== undefined && response.status === 200) {
            //可判断服务器返回状态
            // if(response.data.code == 999){
            //     store.commit('isLoginChange',false);
            //     store.commit('tokenChange',"");
            //     store.commit('wsTokenChange',"");
            //     Notify({ type: 'warning',message: '请登录'});
            //     Toast.clear();
            //     router.push({
            //         path : '/login'
            //     })
            //     return;
            // }
            // if(response.data.code != 1){
            //     Toast({
            //         position : 'bottom',
            //         duration: 1500,
            //         message : '请求成功!'
            //     })
            //     return;
            // }
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是200的情况
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                case 9999:
                
                    break;
                // 其他错误，直接抛出错误提示
                default:
                    Toast({
                        message: '网络错误 请稍后再试',
                        duration: 1500,
                        forbidClick: true
                    });
            }
            return Promise.reject(error.response);
        }
    }
);
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params){
    return new Promise((resolve, reject) =>{
        axios.get(url, {
            params
        })
        .then(res => {
            // Toast.clear();
            resolve(res.data);
        })
        .catch(err => {
            // Toast.clear();
            reject(err.data)
        })
    });
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
    let obj =  QS.stringify(params)
    console.log(obj)
    
    return new Promise((resolve, reject) => {
        axios.post(url, params)
        .then(res => {
            // Toast.clear();
            resolve(res.data);
        })
        .catch(err => {
            // Toast.clear();
            reject(err.data)
        })
    });
}