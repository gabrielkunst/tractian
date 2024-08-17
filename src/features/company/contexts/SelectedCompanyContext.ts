import { createContext } from 'react'
import { Company } from '../types'

interface SelectedCompanyContextProps {
  selectedCompany: Company | null
  setSelectedCompany: React.Dispatch<React.SetStateAction<Company | null>>
}

export const SelectedCompanyContext =
  createContext<SelectedCompanyContextProps>({
    selectedCompany: null,
    setSelectedCompany: () => {},
  })
