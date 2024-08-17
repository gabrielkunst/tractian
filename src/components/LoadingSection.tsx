import { twMerge } from 'tailwind-merge'
import { Logo } from './Logo'

interface LoadingSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoadingSection({ className, ...props }: LoadingSectionProps) {
  return (
    <div
      {...props}
      className={twMerge('flex items-center justify-center flex-1', className)}
    >
      <Logo className="w-[200px] sm:w-[250px] h-auto animate-pulse" />
    </div>
  )
}
