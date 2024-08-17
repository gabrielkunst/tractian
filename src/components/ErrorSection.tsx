import { twMerge } from 'tailwind-merge'

interface ErrorSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  message?: string
}

const DEFAULT_ERROR_MESSAGE =
  'Ocorreu um erro ao carregar esta página. Por favor, tente novamente mais tarde.'

export function ErrorSection({
  message = DEFAULT_ERROR_MESSAGE,
  className,
  ...props
}: ErrorSectionProps) {
  return (
    <div
      {...props}
      className={twMerge('flex items-center justify-center flex-1', className)}
    >
      <p>{message}</p>
    </div>
  )
}
