import { twMerge } from 'tailwind-merge'

interface ComponentTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

export function ComponentTitle({ className, ...props }: ComponentTitleProps) {
  return (
    <h4
      {...props}
      className={twMerge(
        'text-xl font-semibold text-custom-gray-950',
        className
      )}
    />
  )
}
