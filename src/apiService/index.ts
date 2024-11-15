import type {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

import axios from 'axios'

import { store } from '../store'

export const apiService: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

apiService.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('token')

  config.headers['X-API-Key'] = 'bw/TNc3Lsvdhtf4Gq5uwmmC82sfj/xs1kRBrzrJFhtA='

  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token
  }
  return config
})

apiService.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  error => {
    if (error?.response?.status === 401) {
      localStorage.removeItem('token')

      store.auth.isAuth = false
    }
    return Promise.reject(error)
  },
)
