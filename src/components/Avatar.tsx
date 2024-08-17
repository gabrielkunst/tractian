import { twMerge } from 'tailwind-merge'

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: string
  placeholder: string
}

export function Avatar({
  className,
  image,
  placeholder,
  ...props
}: AvatarProps) {
  return (
    <div
      {...props}
      className={twMerge(
        'h-7 w-7 bg-primary rounded-full overflow-hidden flex items-center justify-center',
        className
      )}
    >
      {image !== undefined ? (
        <img
          className="object-cover w-full h-full"
          src={image}
          alt="Avatar"
        />
      ) : (
        <span className="text-custom-white">{placeholder}</span>
      )}
    </div>
  )
}
