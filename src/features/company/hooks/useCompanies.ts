import { useContext } from 'react'
import { CompaniesContext } from '../contexts'

export function useCompanies() {
  const companies = useContext(CompaniesContext)

  if (!companies) {
    throw new Error('useCompanies must be used within a CompaniesProvider')
  }

  return companies
}
