
import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export function ImageLightbox({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const openerRef = useRef<HTMLElement | null>(null)
  const [active, setActive] = useState<{ src: string; alt: string } | null>(null)
  const [index, setIndex] = useState(0)
  const [activeGroup, setActiveGroup] = useState<string | null>(null)

  const imagesFor = (group: string | null) => {
    const images = Array.from(rootRef.current?.querySelectorAll<HTMLImageElement>('img:not(.brand-logo):not([aria-hidden="true"]):not(.lightbox-preview)') ?? [])
    if (!group) return images
    const albumImages = images.filter((image) => image.dataset.lightboxGroup === group && !image.closest('.unit-photo-stage'))
    return albumImages.length ? albumImages : images.filter((image) => image.dataset.lightboxGroup === group)
  }

  const getImageDescription = (image: HTMLImageElement) => image.alt || image.closest('button')?.getAttribute('aria-label')?.replace(/^عرض\s*/, '') || 'صورة للشقق'
  const closeImage = () => {
    setActive(null)
    setActiveGroup(null)
  }

  useEffect(() => {
    const images = rootRef.current?.querySelectorAll<HTMLImageElement>('img:not(.brand-logo):not([aria-hidden="true"]):not(.lightbox-preview)')
    images?.forEach((image) => {
      if (image.closest('button, a')) return
      image.setAttribute('tabindex', '0')
      image.setAttribute('role', 'button')
      image.setAttribute('aria-haspopup', 'dialog')
      image.setAttribute('aria-label', `فتح الصورة: ${image.alt || 'صورة للشقق'}`)
    })
  }, [children])

  useEffect(() => {
    if (!active) {
      openerRef.current?.focus()
      return
    }
    closeRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeImage()
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') move(event.key === 'ArrowLeft' ? 1 : -1)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [active, activeGroup, index])

  const move = (direction: number) => {
    const images = imagesFor(activeGroup)
    if (!images.length) return
    const nextIndex = (index + direction + images.length) % images.length
    const image = images[nextIndex]
    setIndex(nextIndex)
    setActive({ src: image.currentSrc || image.src, alt: getImageDescription(image) })
  }

  const openImage = (image: HTMLImageElement) => {
    openerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : image
    const group = image.dataset.lightboxGroup ?? null
    const images = imagesFor(group)
    const source = image.currentSrc || image.src
    const matchingIndex = images.findIndex((candidate) => (candidate.currentSrc || candidate.src) === source)
    setActiveGroup(group)
    setIndex(matchingIndex >= 0 ? matchingIndex : 0)
    setActive({ src: source, alt: getImageDescription(image) })
  }

  return (
    <div ref={rootRef} className="lightbox-root" onClickCapture={(event) => {
      const target = event.target
      if (target instanceof HTMLImageElement && !target.closest('.lightbox-dialog,.blog-image-link,.footer-blog-card') && !target.classList.contains('brand-logo') && target.getAttribute('aria-hidden') !== 'true') {
        event.preventDefault()
        if (!target.closest('button')) event.stopPropagation()
        openImage(target)
      }
    }} onKeyDownCapture={(event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        const target = event.target
        if (target instanceof HTMLButtonElement && target.classList.contains('unit-thumbnail')) return
        const image = target instanceof HTMLImageElement ? target : target instanceof HTMLButtonElement ? target.querySelector('img') : null
        if (image && !image.classList.contains('brand-logo')) {
          event.preventDefault()
          event.stopPropagation()
          openImage(image)
        }
      }
    }}>
      {children}
      {active && <div className="lightbox-backdrop" role="presentation" onClick={closeImage}>
        <div className="lightbox-dialog" role="dialog" aria-modal="true" aria-label="عارض صور الشقق" onClick={(event) => event.stopPropagation()}>
          <button ref={closeRef} className="lightbox-close" aria-label="إغلاق الصورة" onClick={closeImage}><X /></button>
          <button className="lightbox-prev" aria-label="الصورة السابقة" onClick={() => move(-1)}><ChevronRight /></button>
          <figure><figcaption>{active.alt}</figcaption></figure>
          <button className="lightbox-next" aria-label="الصورة التالية" onClick={() => move(1)}><ChevronLeft /></button>
        </div>
      </div>}
    </div>
  )
}
