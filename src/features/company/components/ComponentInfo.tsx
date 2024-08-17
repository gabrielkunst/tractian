import { twMerge } from 'tailwind-merge'

function ComponentInfo({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={twMerge('space-y-1', className)}
    />
  )
}

function ComponentInfoTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      {...props}
      className={twMerge('font-semibold text-custom-gray-950', className)}
    />
  )
}

function ComponentInfoValueWrapper({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={twMerge('flex items-center gap-2', className)}
    />
  )
}

function ComponentInfoValue({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      {...props}
      className={twMerge('text-custom-gray-500', className)}
    />
  )
}

export {
  ComponentInfo,
  ComponentInfoTitle,
  ComponentInfoValueWrapper,
  ComponentInfoValue,
}
