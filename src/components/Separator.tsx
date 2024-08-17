import { twMerge } from 'tailwind-merge'

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'horizontal' | 'vertical'
}

export function Separator({
  direction = 'horizontal',
  className,
  ...props
}: SeparatorProps) {
  return (
    <div
      {...props}
      className={twMerge(
        'bg-custom-gray-150',
        direction === 'horizontal' ? 'w-full h-px' : 'w-px h-full',
        className
      )}
    />
  )
}
