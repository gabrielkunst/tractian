import { twMerge } from 'tailwind-merge'
import { Logo } from './Logo'
import SpinnerIcon from '../assets/icons/spinner-icon.svg'

interface LoadingSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'logo' | 'spinner'
}

export function LoadingSection({
  className,
  variant = 'spinner',
  ...props
}: LoadingSectionProps) {
  return (
    <div
      {...props}
      className={twMerge(
        'flex h-full items-center justify-center flex-1',
        className
      )}
    >
      {variant === 'logo' ? (
        <Logo className="w-[200px] sm:w-[250px] h-auto animate-pulse" />
      ) : (
        <SpinnerIcon className="w-8 h-8" />
      )}
    </div>
  )
}
