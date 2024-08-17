import { twMerge } from 'tailwind-merge'
import { Company } from '../types'
import UnitIcon from '../../../assets/icons/unit-icon.svg'

interface CompanyItemProps extends React.HTMLAttributes<HTMLLIElement> {
  isSelected?: boolean
  company: Company
  handleCompanyClick: (id: string) => void
}

export function CompanyItem({
  className,
  isSelected,
  company,
  handleCompanyClick,
  ...props
}: CompanyItemProps) {
  const { name, id } = company

  const onClick = () => handleCompanyClick(id)

  return (
    <li
      {...props}
      onClick={onClick}
      className={twMerge(
        'bg-secondary cursor-pointer flex items-center gap-2 transition-colors duration-200 px-3 py-1 rounded text-sm font-semibold',
        isSelected && 'bg-primary',
        className
      )}
    >
      <UnitIcon className="w-4 h-4 shrink-0" />
      {name} Unit
    </li>
  )
}
