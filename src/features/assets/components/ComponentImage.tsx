interface ComponentImageProps {
  image?: string
  alt?: string
}

export function ComponentImage({ image, alt }: ComponentImageProps) {
  return (
    <div className="w-full h-full overflow-hidden rounded max-w-80 max-h-52">
      <img
        className="object-cover object-center w-full h-full"
        src={image}
        alt={alt ?? 'Imagem do componente'}
      />
    </div>
  )
}
