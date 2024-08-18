import { api } from '../../../lib/api'
import { Location } from '../types'

export async function fetchLocations(companyId: string): Promise<Location[]> {
  const response = await api.get(`/companies/${companyId}/locations`)
  return response.data
}
