import { CompanyHeader } from '../components/CompanyHeader'
import { CompanyContent } from '../components/CompanyContent'
import { useSelectedCompany } from '../hooks'
import { EmptySection } from '../../../components/EmptySection'

export function CompanyOverview() {
  const { selectedCompany } = useSelectedCompany()

  if (!selectedCompany) {
    return (
      <EmptySection message="Nenhuma empresa selecionada. Por favor, selecione uma empresa para visualizar os detalhes" />
    )
  }

  return (
    <div className="flex flex-col flex-1 space-y-3 overflow-hidden">
      <CompanyHeader companyName={selectedCompany.name} />
      <CompanyContent />
    </div>
  )
}
