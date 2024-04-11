import axios from 'axios'
import { API_URL } from '../constants/constants'

export const $api = axios.create({
  withCredentials: false,
  baseURL: `${API_URL}/api`
})

$api.interceptors.request.use(config => {
  config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})
