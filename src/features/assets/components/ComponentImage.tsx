import { twMerge } from 'tailwind-merge'
import InboxIcon from '../../../assets/icons/inbox-icon.svg'

interface ComponentImageProps {
  image?: string
  alt?: string
}

export function ComponentImage({ image, alt }: ComponentImageProps) {
  const hasImage = !!image

  return (
    <div
      className={twMerge(
        'w-full overflow-hidden border rounded max-w-[400px] h-[250px]',
        !hasImage &&
          'flex items-center justify-center bg-custom-blue-50 border-dashed border-custom-blue-400 border-2'
      )}
    >
      {hasImage ? (
        <img
          className="object-cover object-center w-full h-full"
          src={image}
          alt={alt ?? 'Imagem do componente'}
        />
      ) : (
        <div className="flex flex-col items-center gap-1 text-center">
          <InboxIcon className="w-12 h-12 text-custom-blue-400" />
          <p className="text-sm text-primary">Adicionar imagem do Ativo</p>
        </div>
      )}
    </div>
  )
}
