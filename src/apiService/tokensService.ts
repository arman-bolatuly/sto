import { apiService } from '.'

const tokensService = {
  createToken: (bodyData: any) => apiService.post('adm/tokens', bodyData),

  updateToken: (bodyData: any) =>
    apiService.put(`adm/tokens/${bodyData?.id}`, bodyData),

  getTokens: (params: any) => apiService.get('adm/tokens', { params }),

  deleteToken: (id: string) => apiService.delete(`adm/tokens/${id}`),
}

export const { getTokens, createToken, updateToken, deleteToken } =
  tokensService
