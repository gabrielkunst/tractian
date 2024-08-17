import { twMerge } from 'tailwind-merge'
import { useCompanies, useSelectedCompany } from '../hooks'
import { CompanyItem } from './CompanyItem'

interface CompaniesListProps extends React.HTMLAttributes<HTMLUListElement> {}

export function CompaniesList({ className, ...props }: CompaniesListProps) {
  const { companies } = useCompanies()
  const { selectedCompany, setSelectedCompany } = useSelectedCompany()

  const handleCompanyClick = (id: string) => {
    if (selectedCompany?.id === id) {
      return
    }

    const company = companies.find((company) => company.id === id)

    if (!company) {
      return
    }

    setSelectedCompany(company)
  }

  return (
    <ul
      {...props}
      className={twMerge('flex items-center gap-2', className)}
    >
      {companies.map((company) => (
        <CompanyItem
          key={company.id}
          company={company}
          isSelected={selectedCompany?.id === company.id}
          handleCompanyClick={handleCompanyClick}
        />
      ))}
    </ul>
  )
}
