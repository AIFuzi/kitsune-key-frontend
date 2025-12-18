import { api } from '@/api/api'

export class LoginService {
  static async login(email: string, password: string, pin: string) {
    return await api.post('/session/login', { email, password, pin })
  }
}
