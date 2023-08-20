// axios 封装
import axios, { AxiosError } from 'axios'
import { message } from 'antd'
import { hideLoading, showLoading } from '@/utils/loading'
import env from '@/config'
import storage from '@/utils/storage'

const instance = axios.create({
  baseURL: env.baseApi,
  timeout: 10000,
  timeoutErrorMessage: '请求超时, 请稍后再试',
  withCredentials: true
})

// 请求拦截
instance.interceptors.request.use(
  config => {
    showLoading()
    const token = storage.get('token')
    if (token) {
      config.headers.Authorization = token
    }
    config.headers.icode = env.icode
    return {
      ...config
    }
  },
  (error: AxiosError) => {
    message.error(error.message)
    return Promise.reject(error.message)
  }
)

// 响应拦截
instance.interceptors.response.use(
  response => {
    const {
      data: { data, code, msg }
    } = response
    hideLoading()
    if (code === 500001) {
      message.error(msg)
      storage.remove('token')
      //window.location.href = '/login'
    } else if (code !== 0) {
      message.error(msg)
      return Promise.reject(msg)
    }
    return data
  },
  (error: AxiosError) => {
    hideLoading()
    message.error(error.message)
    return Promise.reject(error.message)
  }
)

export default {
  get<T>(url: string, params?: object): Promise<T> {
    return instance.get(url, { params })
  },

  post<T>(url: string, params?: object): Promise<T> {
    return instance.post(url, params)
  }
}
