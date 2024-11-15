import { apiService } from '.'

const casesService = {
  createCase: (bodyData: any) => apiService.post('adm/cases', bodyData),

  updateCase: (bodyData: any) =>
    apiService.put(`adm/cases/${bodyData?.id}`, bodyData),

  getCases: (params: any) => apiService.get('adm/cases', { params }),

  deleteCase: (id: string) => apiService.delete(`adm/cases/${id}`),
}

export const { getCases, createCase, updateCase, deleteCase } = casesService
