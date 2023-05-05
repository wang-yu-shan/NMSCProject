import axios from 'axios'
// import store from '@/pinia'
// import Router from '@/router'
import { Message } from 'element-ui'
import cookie from '../libs/util.cookies'
const baseUrl = ''

const service = axios.create({
    baseURL: baseUrl,
    timeout: 10000
})

service.interceptors.request.use(
    config => {
        const token = cookie.get('token')
        if (token) {
            config.headers.Authorization = 'Bearer ' + token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    async res => {
        return res.data
        // if (data.code === 401) {
        //     if (Router.currentRoute.fullPath === '/login') return Promise.reject(data.message);
        //     Modal.confirm({
        //         title: '提示',
        //         content: '登录已过期，请重新登录',
        //         okText: '确定',
        //         cancelText: '取消',
        //         onOk: () => {
        //             Router.push('/login');
        //         },
        //         onCancel: () => {
        //             Router.push('/login');
        //         }
        //     })
        //     return Promise.reject(data.message);
        // } else if (data.code === 403) {

        // } else if (data.code === 500) {
        //     message.error({
        //         content: data.msg || '500',
        //     });
        //     return Promise.reject(new Error(data.message));
        // } else if (data.code === 503) {
        //     if (Router.currentRoute.path === '/UISlogin') return Promise.reject(data);
        //     message.error({
        //         content: data.msg || '500',
        //     });
        //     return Promise.reject(new Error(data.message));
        // } else {
        //     message.error({
        //         content: data.message || 'Error',
        //     });
        //     return Promise.reject();
        // }
    },
    error => {
        console.log('error', error)
        const status = error.response.status
        switch (status) {
            case 400: error.message = '请求错误'; break
            case 401: error.message = '未授权，请登录'; break
            case 403: error.message = '拒绝访问'; break
            case 404: error.message = `请求地址出错: ${error.response.config.url}`; break
            case 408: error.message = '请求超时'; break
            case 500: error.message = '服务器内部错误'; break
            case 501: error.message = '服务未实现'; break
            case 502: error.message = '网关错误'; break
            case 503: error.message = '服务不可用'; break
            case 504: error.message = '网关超时'; break
            case 505: error.message = 'HTTP版本不受支持'; break
            default: break
        }
        Message.error(error.message)
        return Promise.reject(error)
    }
)

export default service
