import { Title } from '../../../components/Title'
import { AssetsTreeFilters } from '../../assets/components'

interface CompanyHeaderProps {
  companyName: string
}

export function CompanyHeader({ companyName }: CompanyHeaderProps) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <Title
        text="Ativos"
        trailing={`${companyName} Unit`}
      />

      <AssetsTreeFilters />
    </div>
  )
}
