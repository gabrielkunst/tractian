import EmptyIcon from '../assets/icons/empty-icon.svg'
import { twMerge } from 'tailwind-merge'

interface EmptySectionProps extends React.HTMLAttributes<HTMLDivElement> {
  message?: string
}

const DEFAULT_MESSAGE = 'Nenhum item encontrado'

export function EmptySection({
  message = DEFAULT_MESSAGE,
  className,
  ...props
}: EmptySectionProps) {
  return (
    <div
      {...props}
      className={twMerge(
        'flex h-full items-center justify-center flex-1 flex-col',
        className
      )}
    >
      <EmptyIcon className="w-32 h-32 -mb-2 text-custom-gray-950" />

      <p className="max-w-lg text-sm text-center text-custom-gray-600">
        {message}
      </p>
    </div>
  )
}
