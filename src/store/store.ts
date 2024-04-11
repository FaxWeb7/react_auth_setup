import { makeAutoObservable } from 'mobx'
import { $api } from '../http'
import { IUser } from '../models/User/IUser'
import { LoginResponse } from '../models/ServerResponse/LoginResponse'

export default class Store {
  isAuth = false
  isLoading = false
  user = {} as IUser

  constructor() {
    makeAutoObservable(this)
  }

  setAuth(bool: boolean) {
    this.isAuth = bool
  }

  setLoading(bool: boolean) {
    this.isLoading = bool
  }

  setUser(user: IUser) {
    this.user = user
  }

  updateAuth() {
    //может быть запрос на refresh, если он используется

    this.setAuth(true)
    this.getUser()
  }

  async login(login: string, password: string) {
    this.setLoading(true)
    try {
      const response = await $api.post<LoginResponse>('/login', { login, password })
      localStorage.setItem('token', response.data.token)
      this.setUser(response.data.user)
    } catch (e) {
      console.log(e)
    } finally {
      this.setLoading(false)
    }
  }

  async getUser() {
    if (this.user !== ({} as IUser)) return this.user
    this.setLoading(true)
    try {
      const response = await $api.get<IUser>('/get-user')
      this.setUser(response.data)
      return this.user
    } catch (e) {
      console.log(e)
    } finally {
      this.setLoading(false)
    }
  }
}
