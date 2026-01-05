import { api } from '@/api/api'
import { AxiosResponse } from 'axios'
import { IError, ILogin } from '@/libs/interfaces'

export class LoginService {
  static async login(
    email: string,
    password: string,
    pin?: string,
  ): Promise<AxiosResponse<ILogin | IError>> {
    return await api.post('/session/login', { email, password, pin })
  }
}
