import { apiService } from '.'

const accountService = {
  registration: (bodyData: any) => apiService.post('register', bodyData),

  login: (bodyData: any) => apiService.post('login', bodyData),

  adminRegistration: (bodyData: any) => apiService.post('adm/create', bodyData),

  adminLogin: (bodyData: any) => apiService.post('adm/login', bodyData),

  getAccount: () => apiService.get('adm/me'),
}

export const {
  login,
  getAccount,
  registration,
  adminRegistration,
  adminLogin,
} = accountService
