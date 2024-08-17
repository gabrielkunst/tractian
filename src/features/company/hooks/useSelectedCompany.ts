import { useContext } from 'react'
import { SelectedCompanyContext } from '../contexts/SelectedCompanyContext'

export function useSelectedCompany() {
  return useContext(SelectedCompanyContext)
}
