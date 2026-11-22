import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

type SlideshowImage = { src: string; alt?: string }

type ApartmentPhotoSlideshowProps = {
  images: SlideshowImage[]
  className: string
  label: string
  priority?: boolean
  controls?: boolean
}

export function ApartmentPhotoSlideshow({ images, className, label, priority = false, controls = false }: ApartmentPhotoSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!controls || paused || reducedMotion || images.length < 2) return
    const timer = window.setInterval(() => setActiveIndex((current) => (current + 1) % images.length), 6000)
    return () => window.clearInterval(timer)
  }, [controls, paused, reducedMotion, images.length])

  const move = (direction: number) => {
    if (!images.length) return
    setActiveIndex((current) => (current + direction + images.length) % images.length)
  }

  return <><div className={`apartment-photo-slideshow ${className} ${controls ? 'controlled-slideshow' : ''} ${paused || reducedMotion ? 'slideshow-paused' : ''}`} role="img" aria-label={label}>
    {images.map((image, index) => {
      const slideNumber = index + 1
      const isPriorityImage = priority && slideNumber === 1

      return <img
        key={image.src}
        className={`apartment-photo-slide apartment-photo-slide-${slideNumber} ${index === activeIndex ? 'is-active' : ''}`}
        src={image.src}
        alt=""
        aria-hidden="true"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={isPriorityImage ? 'high' : 'auto'}
        decoding="async"
      />
    })}
  </div>{controls && images.length > 1 && <div className="hero-photo-controls" aria-label="صور الشقق">
    <Button variant="ghost" size="icon" aria-label="صورة الشقة السابقة" title="الصورة السابقة" onClick={() => move(-1)}><ChevronRight /></Button>
    <span className="hero-slide-count" aria-live={paused ? 'polite' : 'off'}>{String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span>
    <Button variant="ghost" size="icon" aria-label="صورة الشقة التالية" title="الصورة التالية" onClick={() => move(1)}><ChevronLeft /></Button>
    {!reducedMotion && <Button variant="ghost" size="icon" aria-label={paused ? 'تشغيل تبديل الصور' : 'إيقاف تبديل الصور'} title={paused ? 'تشغيل الصور' : 'إيقاف الصور'} onClick={() => setPaused((value) => !value)}>{paused ? <Play /> : <Pause />}</Button>}
  </div>}</>
}
