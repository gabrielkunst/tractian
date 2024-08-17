import { useContext } from 'react'
import { CompaniesContext } from '../contexts'

export function useCompanies() {
  return useContext(CompaniesContext)
}
