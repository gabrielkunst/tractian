import { PropsWithChildren, useMemo, useState } from 'react'
import { SelectedCompanyContext } from '../contexts'
import { Company } from '../types'

export function SelectedCompanyProvider({ children }: PropsWithChildren) {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null)

  const contextValue = useMemo(
    () => ({ selectedCompany, setSelectedCompany }),
    [selectedCompany, setSelectedCompany]
  )

  return (
    <SelectedCompanyContext.Provider value={contextValue}>
      {children}
    </SelectedCompanyContext.Provider>
  )
}
