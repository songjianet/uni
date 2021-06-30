import Request from 'luch-request'
import env from '../env'

// 创建实例
const http = new Request()

// 统一配置http公共参数
http.setConfig(config => {
  config.baseURL = env.api.baseURL
  config.timeout = env.api.timeout
  config.header = env.api.header

  return config
})

// 请求拦截器回调
const config = config => {
  return config
}

// 请求拦截器失败回调
const reqErr = err => {
  return Promise.reject(err)
}

// 响应拦截器回调
const res = res => {
  return res.data
}

// 响应拦截器失败回调
const resErr = err => {
  return Promise.reject(err)
}

// 请求拦截器
http.interceptors.request.use(config, reqErr)

// 响应拦截器
http.interceptors.response.use(res, resErr)

export { http as request }
