import { twMerge } from 'tailwind-merge'
import { Logo } from './Logo'

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Header({ className, children, ...props }: HeaderProps) {
  return (
    <header
      {...props}
      className={twMerge(
        'bg-tertiary px-4 h-16 flex shrink-0 items-center justify-center sm:justify-between',
        className
      )}
    >
      <Logo className="w-auto h-5" />
      {children}
    </header>
  )
}
