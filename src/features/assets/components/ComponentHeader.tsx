import { twMerge } from 'tailwind-merge'

interface ComponentHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ComponentHeader({ className, ...props }: ComponentHeaderProps) {
  return (
    <div
      {...props}
      className={twMerge(
        'flex items-center p-4 border-b gap-2 border-custom-gray-150',
        className
      )}
    />
  )
}
