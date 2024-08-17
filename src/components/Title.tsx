import { twMerge } from 'tailwind-merge'

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string
  trailing?: string
}

export function Title({ text, trailing, className, ...props }: TitleProps) {
  const trailingText = trailing ? ` / ${trailing}` : undefined

  return (
    <h1
      {...props}
      className={twMerge(
        'text-custom-gray-950 font-semibold text-3xl',
        className
      )}
    >
      {text}
      {trailingText !== undefined && (
        <span className="text-lg font-normal text-custom-gray-600">
          {trailingText}
        </span>
      )}
    </h1>
  )
}
