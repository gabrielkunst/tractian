import { twMerge } from 'tailwind-merge'

const buttonVariants = {
  variant: {
    default:
      'bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary/80',
    outline:
      'border border-custom-gray-200 text-custom-gray-600 bg-transparent focus-visible:ring-custom-gray-200',
    secondary: 'bg-secondary text-custom-white hover:bg-secondary/80',
    link: 'text-primary underline-offset-4 hover:underline',
  },
  size: {
    default: 'h-10 px-4 py-2 text-base',
    sm: 'h-8 rounded px-3 text-sm',
    lg: 'h-11 rounded px-8 text-lg',
    icon: 'h-10 w-10',
  },
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants.variant
  size?: keyof typeof buttonVariants.size
}

export function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonProps) {
  const variantStyles = buttonVariants.variant[variant]
  const sizeStyles = buttonVariants.size[size]

  return (
    <button
      {...props}
      className={twMerge(
        'inline-flex gap-2 items-center justify-center whitespace-nowrap rounded font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50',
        variantStyles,
        sizeStyles,
        className
      )}
    />
  )
}
