import type { AxiosError } from 'axios'

export const axiosErrorHandler = (error: AxiosError) => {
  let errorMsg : Exclude<object, string> = {}
  if (error.response) {
    // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
    errorMsg = Object.assign(errorMsg, error.response.data)
    errorMsg = Object.assign(errorMsg, error.response.status)
    errorMsg = Object.assign(errorMsg, error.response.headers)
  } else if (error.request) {
    // 请求已经成功发起，但没有收到响应
    // `error.request` 在浏览器中是 XMLHttpRequest 的实例，
    // 而在node.js中是 http.ClientRequest 的实例
    errorMsg = Object.assign(errorMsg, error.request)
  } else {
    // 发送请求时出了点问题
    errorMsg = Object.assign(errorMsg, 'Error' + error.message)
  }
  errorMsg = Object.assign(errorMsg, error.config)

  return errorMsg
}
