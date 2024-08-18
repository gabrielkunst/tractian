import UnitIcon from '../../../assets/icons/unit-icon.svg'
import { Company } from '../types'
import { Button } from '../../../components/Button'

interface CompanyItemProps extends React.HTMLAttributes<HTMLLIElement> {
  isSelected?: boolean
  company: Company
  handleCompanyClick: (id: string) => void
}

export function CompanyItem({
  isSelected,
  company,
  handleCompanyClick,
  ...props
}: CompanyItemProps) {
  const { name, id } = company

  const onClick = () => handleCompanyClick(id)

  return (
    <li {...props}>
      <Button
        className="font-semibold"
        variant={isSelected ? 'default' : 'secondary'}
        size="sm"
        onClick={onClick}
      >
        <UnitIcon className="w-4 h-4 shrink-0" />
        {name} Unit
      </Button>
    </li>
  )
}
