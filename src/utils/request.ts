import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10 * 1000
})

instance.interceptors.request.use(
  (config) => {
    // 设置token
    return config
  },
  (err: any) => Promise.reject(err)
)

instance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (err: any) => {
    if (err && err.response) {
      const { response } = err
      const status: number = response.status
      let msg = ''
      if (status < 200 || status >= 300) {
        // 统一处理http错误
        msg = showStatus(status)
      }
      console.log(msg)
      return Promise.reject(err.response)
    }
  }
)

const showStatus = (status: number): string => {
  let message: string
  switch (status) {
    case 400:
      message = '请求错误(400)'
      break
    case 401:
      message = '未授权，请重新登录(401)'
      break
    case 403:
      message = '拒绝访问(403)'
      break
    case 404:
      message = '请求出错(404)'
      break
    case 408:
      message = '请求超时(408)'
      break
    case 500:
      message = '服务器错误(500)'
      break
    case 501:
      message = '服务未实现(501)'
      break
    case 502:
      message = '网络错误(502)'
      break
    case 503:
      message = '服务不可用(503)'
      break
    case 504:
      message = '网络超时(504)'
      break
    case 505:
      message = 'HTTP版本不受支持(505)'
      break
    default:
      message = `连接出错(${status})!`
  }
  return message
}

export default instance
