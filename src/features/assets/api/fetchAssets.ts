import { api } from '../../../lib/api'
import { Asset } from '../types'

export async function fetchAssets(companyId: string): Promise<Asset[]> {
  const response = await api.get(`/companies/${companyId}/assets`)
  return response.data
}
