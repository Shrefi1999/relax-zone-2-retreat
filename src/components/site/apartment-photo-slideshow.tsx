type SlideshowImage = { src: string }

type ApartmentPhotoSlideshowProps = {
  images: SlideshowImage[]
  className: string
  label: string
  priority?: boolean
}

export function ApartmentPhotoSlideshow({ images, className, label, priority = false }: ApartmentPhotoSlideshowProps) {
  return <div className={`apartment-photo-slideshow ${className}`} role="img" aria-label={label}>
    {images.map((image, index) => {
      const slideNumber = index + 1
      const isPriorityImage = priority && slideNumber === 1

      return <img
        key={image.src}
        className={`apartment-photo-slide apartment-photo-slide-${slideNumber}`}
        src={image.src}
        alt=""
        aria-hidden="true"
        loading={isPriorityImage ? 'eager' : 'lazy'}
        fetchPriority={isPriorityImage ? 'high' : 'auto'}
        decoding="async"
      />
    })}
  </div>
}
