import Request from 'luch-request'

// 创建实例
const http = new Request()

// 统一配置http公共参数
http.setConfig(config => {
  // config.baseURL = ''
  config.timeout = 6000

  return config
})

// 请求拦截器回调
const config = config => {
  config.header['Content-Type'] = 'application/json'

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
