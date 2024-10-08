import { useContext } from 'react'
import { SelectedCompanyContext } from '../contexts'

export function useSelectedCompany() {
  const context = useContext(SelectedCompanyContext)

  if (!context) {
    throw new Error(
      'useSelectedCompany must be used within a SelectedCompanyProvider'
    )
  }

  return context
}
