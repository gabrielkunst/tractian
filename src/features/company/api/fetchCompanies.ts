import { api } from '../../../lib/api'
import { Company } from '../types'

export async function fetchCompanies(): Promise<Company[]> {
  const response = await api.get('/companies')
  return response.data
}
