import axios from 'axios-uni'

// 创建 axios 实例
const service = axios.create({
  timeout: 6000 // 请求超时时间
})

const err = error => {
  // if (error.response) {
  //   if (error.response.status === 401) {}
  // }
  return Promise.reject(error)
}

// request interceptor
service.interceptors.request.use(config => {
  // config.headers['Content-Type'] = 'application/json'
  return config
}, err)

// response interceptor
service.interceptors.response.use(response => {
  return response.data
}, err)

export { service as axios }