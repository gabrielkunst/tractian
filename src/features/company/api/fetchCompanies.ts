import { Company } from '../types'

export async function fetchCompanies(): Promise<Company[]> {
  try {
    const apiUrl = import.meta.env.VITE_API_URL

    const response = await fetch(`${apiUrl}/companies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Failed to fetch companies')
    }

    return response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}
