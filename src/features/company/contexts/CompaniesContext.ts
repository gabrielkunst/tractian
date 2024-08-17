import { createContext } from 'react'
import { Company } from '../types'

interface CompaniesContextProps {
  companies: Company[]
}

export const CompaniesContext = createContext<CompaniesContextProps>({
  companies: [],
})
