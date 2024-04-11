import { IUser } from '../User/IUser'

export interface LoginResponse {
  token: string
  user: IUser
}
