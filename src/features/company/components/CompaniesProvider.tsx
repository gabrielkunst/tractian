import { PropsWithChildren, useMemo } from 'react'
import { CompaniesContext } from '../contexts'
import { useQuery } from '@tanstack/react-query'
import { ErrorSection } from '../../../components/ErrorSection'
import { LoadingSection } from '../../../components/LoadingSection'
import { fetchCompanies } from '../api'

export function CompaniesProvider({ children }: PropsWithChildren) {
  const {
    data: companies = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['companies'],
    queryFn: fetchCompanies,
  })

  const contextValue = useMemo(() => ({ companies }), [companies])

  if (isLoading) {
    return (
      <LoadingSection
        className="min-h-screen bg-tertiary"
        variant="logo"
      />
    )
  }

  if (isError) {
    return (
      <ErrorSection
        className="min-h-screen bg-tertiary"
        message="Ocorreu um erro ao carregar as empresas. Por favor, tente novamente mais tarde."
      />
    )
  }

  return (
    <CompaniesContext.Provider value={contextValue}>
      {children}
    </CompaniesContext.Provider>
  )
}
